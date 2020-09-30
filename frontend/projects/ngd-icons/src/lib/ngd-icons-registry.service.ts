import { Injectable } from '@angular/core';
import { NgdIcon } from './ngd-icons.model';

@Injectable({
  providedIn: 'root'
})
export class NgdIconsRegistry {
  private registry = new Map<string, string>();

  public registerIcons(icons: NgdIcon[]): void {
    icons.forEach((icon: NgdIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find the ngd icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
