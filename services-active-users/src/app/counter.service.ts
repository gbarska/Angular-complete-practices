export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    onActivation(){
        this.inactiveToActiveCounter++;
        console.log('Activations:' + this.inactiveToActiveCounter);
    }

    onInactivation(){
        this.activeToInactiveCounter++;
        console.log('Inactivations:' + this.activeToInactiveCounter);
    }
}