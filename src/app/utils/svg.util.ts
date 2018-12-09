import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MdIconRegistry,ds: DomSanitizer) => {
    const imgDir = 'assets/img';
    const dayDir = `${imgDir}/days`;
    const avatarDir = `${imgDir}/avatar`;
    const iconDir = `${imgDir}/icons`;
    ir.addSvgIconSetInNamespace("avatars",ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.addSvgIcon("unassigned",ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));
    ir.addSvgIcon("gifts",ds.bypassSecurityTrustResourceUrl(`${imgDir}/gifts.svg`));
    ir.addSvgIcon("move",ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    ir.addSvgIcon("add",ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
    ir.addSvgIcon("delete",ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));

    const days = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
    ];
    days.forEach(d => ir.addSvgIcon(`day${d}`,ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${d}.svg`)));
}