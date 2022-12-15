class Tarjeta extends Payment{
    constructor(id, typeOfCard, numberCard, totalPayment){
        super(id);
        this.typeOfCard = typeOfCard;
        this.numberCard = numberCard;
        this.totalPayment = totalPayment;
    }
}