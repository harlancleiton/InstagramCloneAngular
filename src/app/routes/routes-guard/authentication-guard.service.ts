import { CanActivate } from "@angular/router";
import { Authentication } from "../../services/authentication.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private authentication: Authentication) { }

    canActivate(): boolean {
        return this.authentication.isLogged()
    }
}