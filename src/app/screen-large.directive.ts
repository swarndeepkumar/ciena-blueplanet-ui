import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { ScreenService } from './screen.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appScreenLarge]'
})
export class ScreenLargeDirective implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private viewContainer: ViewContainerRef,
                private template: TemplateRef<Object>,
                private screenService: ScreenService ) { 
                this.screenSubscription = screenService.resize$.subscribe(()=> this.onResize())
                }
  @Input()
  set appScreenLarge(condition){
    //ignore the passed condition and set it based on screen size.
    condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;
    if(condition && !this.hasView){
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);

    }else if(!condition && this.hasView){
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
  ngOnDestroy(){
    this.screenSubscription.unsubscribe();
  }

  onResize(){
    // trigger the setter
    this.appScreenLarge = false;
  }
}
