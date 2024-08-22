class SmartPhone{
    constructor(brand,model,year,features,specifications){
        this.brand=brand;
        this.model=model;
        this.year=year;
        this.features=features;
        this.specifications=specifications;
    };
    getInfo(){
        return `The ${this.brand} ${this.model} released in ${this.year} 
        is a flagship smartphone with ${this.specifications.RAM} of RAM`
    }
};

let smartphone=new SmartPhone(
    "Samsung",
    "Galaxy s21 Ultra",
    2021,
    ["5G Connectivity","Quad HD+ Display","High-resolution Camera"],
    {
        processor:"Exynos 2100(Global/ Snapdragon 888 (USA)",
        RAM:"12GB or 16 GB",
        storage:"128GB, 256GB or 512GB"

    }
);

console.log(smartphone.getInfo());
