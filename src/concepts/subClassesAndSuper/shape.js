class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printAllInfo() {
    Object.entries(this).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  }
}

export default Shape;
