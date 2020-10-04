const solveGraphDFS = (graph, start, end, visited = {}) => {
    console.log(start)
    if(visited[start]) return false
    visited[start] = true
    if(graph[start]){
        for(let i = 0; i < graph[start].length; i++){
        if(graph[start][i]){
            if(graph[start][i] === end) return true
            else if(solveGraphDFS(graph, graph[start][i], end, visited)) return true
        }
        }
    }
    return false
}

const graph1 = {
    a: ["b"],
    b: ["d", "c"],
    d: ["e"],
    e: ["f"],
    f: ["b"]
}

const graph2 = {
    a:['c','e','f'],
    b:['e','f'],
    c:['d','e'],
    d:[],
    e:['f'],
    f:['f']
}

console.log(solveGraphDFS(graph2, "a", "f"))