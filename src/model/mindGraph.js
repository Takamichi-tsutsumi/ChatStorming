import axios from 'axios';

function mindGraph(el) {

    // Add and remove element on the graph object
    this.addNode = function(id, origin=false, color="#ffb76a") {
        var node = { 'id': id , 'color': color, 'fixed': origin };
        if (node.fixed) {
            node.y = Number(d3.select('svg').style('height').slice(0, -2)) / 2;
            node.x = Number(d3.select('svg').style('width').slice(0, -2)) / 2;
        }
        nodes.push(node);
        window.nodes.push(id);
        update();
    }

    this.removeNode = function(id) {
        var i = 0;
        var n = findNode(id);
        while (i < links.length) {
            if ((links[i]['source'] == n) || (links[i]['target'] == n)) links.splice(i, 1);
            else i++;
        }
        var index = findNodeIndex(id);
        if (index !== undefined) {
            nodes.splice(index, 1);
            update();
        }
    }

    this.addLink = function(sourceId, targetId) {
        var sourceNode = findNode(sourceId);
        var targetNode = findNode(targetId);

        if ((sourceNode !== undefined) && (targetNode !== undefined)) {
            links.push({'source': sourceNode, 'target': targetNode});

            update();
        }
    }

    this.addChild = function(parent, child, onLoad) {
        this.addNode(child, false, window.color);
        this.addLink(parent, child);
        if (!onLoad) {
            axios.post('http://153.126.215.94/api/node/create', {
                data: JSON.stringify({ name: child, project_id: App.state.id, parent_name: parent })
            }).then((response) => {
                console.log(response);
            }).catch((response) => {
                console.error(response);
                return;
            })

            window.nodeList.deleteSelected();
            window.suggestionList.deleteSelected();

            window.suggestionList.getSuggestions(child);

            window.selected = "";
        }
    }

    var addChild = this.addChild.bind(this);

    var findNode = function(id) {
        for (var i=0; i < nodes.length; i++) {
            if (nodes[i].id === id) return nodes[i];
        };
    }

    var findNodeIndex = function(id) {
        for (var i=0; i < nodes.length; i++) {
            if (nodes[i].id === id) return i;
        }
    }

    // set up D3 visualization in the specific element
    var w = 900,
        h = 500;

    var vis = this.vis = d3.select(el).append('svg:svg')
        .style({
            'height': '100%',
            'width': '100%'
        });


    var force = d3.layout.force()
        .gravity(.01)
        .distance(100)
        .charge(-100)
        .size([w, h]);

    var nodes = force.nodes(),
        links = force.links();

    var update = function() {

        var link = vis.selectAll('line.link')
            .data(links, function(d) { return d.source.id + '-' + d.target.id });

        link.attr('stroke', 'navy');

        link.exit().remove();

        link.enter().insert('line')
            .attr('class', 'link');

        var node = vis.selectAll('g.node')
            .data(nodes, function(d) { return d.id });

        var nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr('id', function(d) {
                return d.id
            })
            .call(force.drag);

        nodeEnter.append('circle')
            .attr('class', 'circle')
            .attr('fill', function(d) { return d.color })
            .attr('r', '28px');

        nodeEnter.append('text')
            .attr('class', 'nodetext')
            .attr('dx', -20)
            .attr('dy', '.35em')
            .text(function(d) { return d.id });

        nodeEnter.on('click', function(d) {
            if (window.done) {
                var selected_node_list = window.selected_node_list;
                if ($.inArray(d.id, selected_node_list) != -1) {
                    // selected_node_list にあるときそいつを削除
                    window.selected_node_list.splice(selected_node_list.indexOf(d.id), 1)
                    d3.select('#' + d.id).classed('selected', false);

                } else {

                    window.selected_node_list.push(d.id);
                    d3.select('#' + d.id).classed('selected', true);
                        }
            } else {

                if (window.selected != '') addChild(d.id, window.selected);
                socket.emit("addChild", {data: { parent: d.id, child: window.selected}})

            }
        }).style('cursor', 'pointer');

        node.exit().remove();

        force.on('tick', function() {
            link.attr('x1', function(d) { return d.source.x })
                .attr('y1', function(d) { return d.source.y })
                .attr('x2', function(d) { return d.target.x })
                .attr('y2', function(d) { return d.target.y });

            node.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'});
        });
        force.start();

    }

    update();
}

export default mindGraph
