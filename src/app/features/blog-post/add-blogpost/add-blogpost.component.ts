import { BlogPostService } from './../services/blog-post.service';
import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrl: './add-blogpost.component.css'
})
export class AddBlogpostComponent {
  model: AddBlogPost;

  constructor(private BlogPostService: BlogPostService, private router: Router){
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date()
    }
  }

  onFormSubmit(): void{
    this.BlogPostService.createBlogPost(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
    });
  }
}
