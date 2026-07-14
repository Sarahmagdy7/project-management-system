import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  status: 'Active' | 'Completed' | 'In Progress';  
  icon: string;
  color: string;
  dateCreated: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  private projectsList: Project[] = [
    { 
      id: 1, 
      name: 'Smart Hospital System', 
      description: 'Integrated platform for hospital management and EMR.', 
      status: 'Active', 
      icon: 'bi-hospital', 
      color: '#0d6efd',
      dateCreated: '2026-03-01'
    },
    { 
      id: 2, 
      name: 'Patient Monitoring App', 
      description: 'Real-time monitoring for ICU patients using IoT sensors.', 
      status: 'In Progress', 
      icon: 'bi-heart-pulse', 
      color: '#dc3545',
      dateCreated: '2026-03-10'
    }
  ];

  constructor() { }

  getAllProjects(): Project[] {
    return [...this.projectsList]; 
  }

  addProject(project: Omit<Project, 'id'>) {
    const newId = this.projectsList.length > 0 
      ? Math.max(...this.projectsList.map(p => p.id)) + 1 
      : 1;
    
    const newProject: Project = { ...project, id: newId };
    this.projectsList.push(newProject);
  }

  getProjectById(id: number): Project | undefined {
    return this.projectsList.find(p => p.id === id);
  }

  deleteProject(id: number) {
    this.projectsList = this.projectsList.filter(p => p.id !== id);
  }
}