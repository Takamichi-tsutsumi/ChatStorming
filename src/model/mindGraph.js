function mindGraph(el) {

    // Add and remove element on the graph object
    this.addNode = function(id) {
        nodes.push({'id': id});
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

    this.addChild = function(parent, child) {
        this.addNode(child);
        this.addLink(parent, child);

        window.nodeList.deleteSelected();
        window.suggestionList.deleteSelected();

        window.suggestionList.getSuggestions(child);
    }

    var addChild = this.addChild.bind(this);

    var findNode = function(id) {
        for (var i=0; i < nodes.length; i++) {
            if (nodes[i].id === id) return nodes[i];
        };
    }

    var dindNodeIndex = function(id) {
        for (var i=0; i < nodes.length; i++) {
            if (nodes[i].id === id) return i;
        }
    }

    // set up D3 visualization in the specific element
    var w = 900,
        h = 500;

    var vis = this.vis = d3.select(el).append('svg:svg')
        .attr('width', w)
        .attr('height', h);

    var force = d3.layout.force()
        .gravity(.01)
        .distance(130)
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
            .attr('id', 3)
            .call(force.drag);

        nodeEnter.append('circle')
            .attr('class', 'circle')
            .attr('fill', '#ffb76a')
            .attr('r', '28px');

        nodeEnter.append('text')
            .attr('class', 'nodetext')
            .attr('dx', -20)
            .attr('dy', '.35em')
            .text(function(d) { return d.id });

        nodeEnter.on('click', function(d) {
            addChild(d.id, window.selected);
        })

        node.exit().remove();
        window.node = node;

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
