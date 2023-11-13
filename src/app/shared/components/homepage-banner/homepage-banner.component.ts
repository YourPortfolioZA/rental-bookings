import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-banner',
  templateUrl: './homepage-banner.component.html',
  styleUrls: ['./homepage-banner.component.scss']
})
export class HomepageBannerComponent implements OnInit {
  homePageSlider = [
    { image: "/assets/images/homepage-images/home1.jpg" },
    { image: "/assets/images/homepage-images/home2.jpg" }
  ];
  currentSlideIndex = 0;
  isTransitioning = false;

  ngOnInit() {
    this.slide();
  }

  async slide() {
    while (true) {
      await this.transitionSlide();
      await this.delay(2000); // Delay before transitioning to the next slide
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.homePageSlider.length;
    }
  }

  async transitionSlide() {
    this.isTransitioning = true;
    await this.delay(2000); // Adjust this delay based on your transition time
    this.isTransitioning = false;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
