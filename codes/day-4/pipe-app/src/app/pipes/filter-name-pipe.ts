import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtername',
    //standalone:true
})
export class FilterNamePipe implements PipeTransform {
    transform(value: string[], ...args: string[]): string[] {
        return args[0] !== '' ? value.filter((name) => name.toLocaleLowerCase().includes(args[0].toLocaleLowerCase())) : value
    }
}