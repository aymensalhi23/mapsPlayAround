import { Component, EventEmitter, Output } from '@angular/core';
import { interval, Subscription, take } from 'rxjs';

export interface Location {
  id: number;
  rotation: number,
  lat: number;
  lng: number;
  status: 'stopped' | 'idle' | 'active';
  details: string;
}

@Component({
  selector: 'app-fleets',
  templateUrl: './fleets.component.html',
  styleUrls: ['./fleets.component.scss']
})
export class FleetsComponent {
  @Output() locationsChanged = new EventEmitter<Location[]>();

  fleets: Location[] = [
    {
      id: 1,
      rotation: 0,
      lat: 25.31468934652761,
      lng: 51.495023148844915,
      status: 'stopped',
      details:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque tempore sapiente aspernatur animi facere, alias at amet earum, est placeat delectus nulla, non nemo obcaecati nisi dicta unde velit minus.',
    },
    {
      id: 2,
      rotation: 45,
      lat: 25.30448596568256,
      lng: 51.50397245440127,
      status: 'idle',
      details:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque tempore sapiente aspernatur animi facere, alias at amet earum, est placeat delectus nulla, non nemo obcaecati nisi dicta unde velit minus.',
    },
    {
      id: 3,
      rotation: 220,
      lat: 25.324029529806197,
      lng: 51.4837825939107,
      status: 'active',
      details:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque tempore sapiente aspernatur animi facere, alias at amet earum, est placeat delectus nulla, non nemo obcaecati nisi dicta unde velit minus.',
    },
    {
      id: 4,
      rotation: 50,
      lat: 25.275621559801866,
      lng: 51.47404608079532,
      status: 'active',
      details:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque tempore sapiente aspernatur animi facere, alias at amet earum, est placeat delectus nulla, non nemo obcaecati nisi dicta unde velit minus.',
    },
    {
      id: 5,
      rotation: 170,
      lat: 25.263250336073472,
      lng: 51.52297488806322,
      status: 'idle',
      details:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque tempore sapiente aspernatur animi facere, alias at amet earum, est placeat delectus nulla, non nemo obcaecati nisi dicta unde velit minus.',
    },
  ];
  selectedFleets: Location[] = [];

  timerSubscription: Subscription | undefined;
  ngOnInit(): void {
    this.selectedFleets.push(this.fleets[0]);
    this.locationsChanged.emit(this.selectedFleets);

    this.timerSubscription = interval(5000) // 5000 ms = 5 seconds
      .pipe(
        take(10) // Emit 10 times
      )
      .subscribe(() => {
        this.selectedFleets[0].rotation += 30;
        this.selectedFleets.forEach(el => {
          el.lat += 0.0001;
          el.lng += 0.0002
        })
      });
  }

  test() {
    this.selectedFleets.push(this.fleets[1]);
  }

  onCheckboxChange(fleet: Location, event: any) {
    if (event.target.checked) {
      this.selectedFleets.push(fleet);
    } else {
      this.selectedFleets = this.selectedFleets.filter((f) => f !== fleet);
    }
    this.locationsChanged.emit(this.selectedFleets);
  }
}
