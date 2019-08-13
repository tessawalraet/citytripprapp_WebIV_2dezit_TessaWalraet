import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from './trip.model';

@Pipe({
  name: 'tripFilter',
  pure: false
})
export class TripFilterPipe implements PipeTransform {

  transform(trips: Trip[], destination: string): Trip[] {
    if(!destination || destination.length === 0)
    {
      return trips;
    }
    return trips.filter(trips => trips.Destination
                                      .toLowerCase()
                                      .startsWith(destination.toLowerCase())
                                      );
  }

}
