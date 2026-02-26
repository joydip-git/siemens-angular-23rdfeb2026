import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
    name: 'productfilter',
    standalone: false
})

export class ProductFilterPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        const filterText = args[0]
        return filterText !== '' ? value
            .filter(p => p
                .productName
                .toLocaleLowerCase()
                .includes(filterText.toLocaleLowerCase())) : value;
    }
}