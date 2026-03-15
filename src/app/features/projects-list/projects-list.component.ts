import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects-list',
  standalone: false,
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  searchTerm: string = '';
  projects: any[] = []; 

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.projects$.subscribe(data => {
      this.projects = data;
    });
  }

  filteredProjects() {
    return this.projects.filter(p => 
      p.projectName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewDetails(id: number) {
    this.router.navigate(['/project-details', id]);
  }
}