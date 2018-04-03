// Draw crosshair in html5 canvas
export default function (context, x, y, color, lineWidth) {
  context.beginPath();
  context.moveTo(x, (y - 15));
  context.lineTo(x, (y + 15));
  context.moveTo((x + 15), y);
  context.lineTo((x - 15), y);
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.stroke();
}

