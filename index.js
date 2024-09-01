// Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver constructor function
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation constructor function
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Example instances
  const scooter = new Scooter(2022, 'red', 'Vespa');
  const driver = new Driver('John Doe', 30, '5 years');
  const pickupLocation = new PickupLocation('123 Main St', 'New York');
  
  // Log the instances to the console
  console.log(scooter);
  console.log(driver);
  console.log(pickupLocation);
  