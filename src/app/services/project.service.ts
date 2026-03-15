import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private initialProjects = [
    { 
      id: 1, 
      projectName: 'Bootstrap 5 Admin', 
      description: 'Based on Solid Bootstrap 5, HTML and Vanilla JS.', 
      status: 'Active',
      image: 'assets/img/download.jpg' 
    },
    { 
      id: 2, 
      projectName: '200+ UI Elements', 
      description: 'Comes with 200+ UI Elements and Components.', 
      status: 'In Progress',
      image: 'assets/img/download1.jpg' 
    },
    { 
      id: 3, 
      projectName: 'SaaS Design', 
      description: 'Crafted for Startup Websites and SaaS Business.', 
      status: 'Completed',
      image: 'assets/img/download2.jpg'
    },
    { 
      id: 4, 
      projectName: 'Clean & Flat UI', 
      description: 'Suited for almost any type of professional website.', 
      status: 'Active',
      image: 'assets/img/download3.jpg'
    },
    { 
      id: 5, 
      projectName: '5 Example Templates', 
      description: 'Packed with 5 different professional templates.', 
      status: 'In Progress',
      image: 'assets/img/images 5.jpg'
    },
    { 
      id: 6, 
      projectName: '100+ Sections', 
      description: 'Tons of sections to kickstart your landing pages.', 
      status: 'Active',
      image: 'assets/img/images 5.jpg' 
    },
    { 
      id: 7, 
      projectName: 'Essential Libraries', 
      description: 'All customized libraries and scripts are included.', 
      status: 'Active',
      image: 'assets/img/images.jpg'
    },
    { 
      id: 8, 
      projectName: 'Fully Responsive', 
      description: 'Compatible with all modern browsers.', 
      status: 'In Progress',
      image: 'assets/img/images.jpg'
    }
  ];

  private projectsSource = new BehaviorSubject<any[]>(this.initialProjects);
  projects$ = this.projectsSource.asObservable();

  constructor() {}

  addProject(project: any) {
    const currentProjects = this.projectsSource.value;
    const newProject = { 
      ...project, 
      id: currentProjects.length + 1,
      image: project.image || 'assets/img/download.jpg' 
    };
    this.projectsSource.next([...currentProjects, newProject]);
  }

  getProjectById(id: number) {
    return this.projectsSource.value.find(p => p.id === id);
  }
}