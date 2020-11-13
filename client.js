
const width = window.innerWidth;
const height = window.innerHeight;

let stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
});

let layer = new Konva.Layer();

let placeholderLine = new Konva.Line({
  points: [5, 70, 140, 23, 250, 60, 300, 20],
  stroke: 'grey',
  strokeWidth: 4,
  lineCap: 'round',
  lineJoin: 'round',
  draggable: true,
});

let draggableLine = new Konva.Line({
  points: [5, 70, 140, 23, 250, 60, 300, 20],
  stroke: 'red',
  strokeWidth: 4,
  lineCap: 'round',
  lineJoin: 'round',
  draggable: true,
});

layer.add(placeholderLine);
layer.add(draggableLine);
stage.add(layer);

console.log(layer);


  