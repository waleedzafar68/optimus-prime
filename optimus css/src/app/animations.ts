import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [
      transition('Services => Home, Contact => Home, About => Home, Cafm => Home, Advantage => Home, Team => Home', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(-100%)' }),
                      animate('1.5s  cubic-bezier(0,.81,.18,1)', style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                       style({ transform: 'translateX(0%)' }),
                       animate('1.5s  cubic-bezier(0,.81,.18,1)', style({ transform: 'translateX(100%)' }))
                    ]),
                 ])
            ]),
        transition('Home => * , Contact => *, About => *, Services => *, Cafm => *, Advantage => *, Team => *', [
            query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('1.5s  cubic-bezier(0,.81,.18,1)', style({ transform: 'translateX(0%)' }))
                ]),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1.5s  cubic-bezier(0,.81,.18,1)', style({ transform: 'translateX(-100%)' }))
                ]),
            ])
        ]),
        
       
    ]);

