const { Prisma } = require("@prisma/client");

const products = [
  {
    name: "Apache RTR 160 4v",
    imageUrl:
      "https://images.carandbike.com/bike-images/large/tvs/apache-rtr-160/tvs-apache-rtr-160.webp?v=13",
    brandId: 1,
    bodyTypeId: 1,
    engineTypeId: 2,
    displacement: 159.7,
    mileage: 48,
    fuelCapacity: 12,
    cylinders: 1,
    maxPower: "11.42 kW @ 8400 rpm",
    maxTorque: "13.9 Nm @ 7000 rpm",
    frontBrake: "Disk",
    rearBrake: "Drum",
    instrumentCluster: "Digital",
    seatHeight: 790,
    groundClearance: 180,
    suspensionType: "Telescopic",
    kerbWeight: 148,
  },
  {
    name: "Apache RTR 200 4v",
    imageUrl:
      "https://media.zigcdn.com/media/model/2021/Nov/tvs-apache-rtr-2004v-right-side-view_600x400.jpg",
    brandId: 1,
    bodyTypeId: 1,
    engineTypeId: 2,
    displacement: 197.8,
    mileage: 32,
    fuelCapacity: 12,
    cylinders: 1,
    maxPower: "15.32 kW @ 9000 rpm",
    maxTorque: "17.25 Nm @ 7250 rpm",
    frontBrake: "Disk",
    rearBrake: "Disk",
    instrumentCluster: "Digital",
    seatHeight: 790,
    groundClearance: 180,
    suspensionType: "Telescopic",
    kerbWeight: 148,
  },
];

module.exports = products;
