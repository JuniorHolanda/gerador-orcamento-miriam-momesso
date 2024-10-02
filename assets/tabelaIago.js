class Iago {
    constructor(amount, color) {
        this.amount = amount
        this.color = color

        this.color1 = [ // 1 cor
            { min: 1, max: 49, price: 1.50 },
            { min: 50, max: 200, price: 0.94 },
            { min: 201, max: 500, price: 0.48 },
            { min: 501, max: 2000, price: 0.48 },
            { min: 2001, max: 5000, price: 0.48 },
            { min: 5001, price: 0.48 }
        ];

        this.color2 = [ // 2 cores
            { min: 1, max: 49, price: 2.07 },
            { min: 50, max: 200, price: 1.48 },
            { min: 201, max: 500, price: 0.96 },
            { min: 501, max: 2000, price: 0.86 },
            { min: 2001, max: 5000, price: 0.83 },
            { min: 5001, price: 0.80 }
        ];

        this.color3 = [ // 3 cores
            { min: 1, max: 49, price: 2.76 },
            { min: 50, max: 200, price: 2.03 },
            { min: 201, max: 500, price: 1.44 },
            { min: 501, max: 2000, price: 1.30 },
            { min: 2001, max: 5000, price: 1.25 },
            { min: 5001, price: 1.20 }
        ];

        this.color4 = [ // 4 cores
            { min: 1, max: 49, price: 3.22 },
            { min: 50, max: 200, price: 2.57 },
            { min: 201, max: 500, price: 1.92 },
            { min: 501, max: 2000, price: 1.72 },
            { min: 2001, max: 5000, price: 1.67 },
            { min: 5001, price: 1.60 }
        ];

        this.color5 = [ // 5 cores
            { min: 1, max: 49, price: 3.45 },
            { min: 50, max: 200, price: 3.21 },
            { min: 201, max: 500, price: 2.40 },
            { min: 501, max: 2000, price: 2.14 },
            { min: 2001, max: 5000, price: 2.08 },
            { min: 5001, price: 2.00 }
        ];
    }
    calcularprice() {
        //seleciona dinamicamente a faixa de preço baseado na quantidade de cores
        const priceAmountColor = this[`color${this.color}`]

        // itera sobre a faixa de preço percorrendos seus itens
        for (let priceProduct of priceAmountColor) {
            if (this.amount >= priceProduct.min && (priceProduct.max === undefined || this.amount <= priceProduct.max)) {
                return this.amount.price; //se a quantidade de produtos for maior que o a quantidade minima do item do array e se a quantidade
            }
        }
    }

}
