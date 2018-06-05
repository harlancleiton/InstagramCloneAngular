import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Injectable()
export class NavigationService implements OnInit {

    constructor(private router: Router) { }

    public navigateTo(route: string): void {
        this.router.navigate([route])
    }

    ngOnInit() { }
}