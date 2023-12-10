const bike = [{
    name: "bike1",
    weight: 10
},
{
    name: "bike2",
    weight: 8
},
{
    name: "bike3",
    weight: 11
}
];

let light_bike = bike[0].weight;

bike.forEach((elem) => {
    if(elem.weight < light_bike.weight){
        light_bike = elem;
    }
});

let {name, weight} = light_bike;

let text = `La bici più leggera è la ${name} e pesa ${weight}`;
console.log(text);