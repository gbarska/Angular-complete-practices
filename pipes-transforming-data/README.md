creating a custom pipe

first create a simple ts class that implements the interface PipeTransform:

@Pipe({
    name: 'shorten'
})
export class nameofpipe implements PipeTransform

then implements the required method: transform:

 transform(value: any) {
        return value.substr(0,10);
    }


last, add the declaration of the new pipe at the Declarations section of the app.module.ts

