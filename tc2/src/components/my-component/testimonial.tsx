import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-testimonial',
  styleUrl: 'testimonial.css',
  shadow: true
})
export class MyTestimonial {
  @Prop() imageSrc: string;
  @Prop() altText: string;
  @Prop() quote: string;
  @Prop() name: string;
  @Prop() description: string;
  @Prop() imagePosition: 'left' | 'right'; // Add this line
  render() {
    return (
      <div class={`testimonial-container ${this.imagePosition}`}>
        {this.imagePosition === 'left' && (
          <div class="testimonial-image">
            <img src={this.imageSrc} alt={this.altText} />
          </div>
        )}
        <div class="testimonial-content">
          <div class="testimonial-quote">
            <blockquote>
              {this.quote}
            </blockquote>
            <div class="testimonial-author">{this.name}</div>
            <div class="testimonial-description">{this.description}</div>
          </div>
        </div>
        {this.imagePosition === 'right' && (
          <div class="testimonial-image">
            <img src={this.imageSrc} alt={this.altText} />
          </div>
        )}
      </div>
    );
  }
}