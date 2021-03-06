import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';
var paginate = require("../../jw-paginate/lib/jw-paginate");
import { CommonModule } from '@angular/common';

let JwPaginationComponent = class JwPaginationComponent {
    constructor() {
        this.changePage = new EventEmitter(true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 10;
        this.pager = {};
    }
    ngOnInit() {
        // set page if items array isn't empty
        if (this.items && this.items.length) {
            this.setPage(this.initialPage);
        }
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
    }
    setPage(page) {
        // get new pager object for specified page
        this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);
        // get new page of items from items array
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(pageOfItems);
    }
};
__decorate([
    Input()
], JwPaginationComponent.prototype, "items", void 0);
__decorate([
    Output()
], JwPaginationComponent.prototype, "changePage", void 0);
__decorate([
    Input()
], JwPaginationComponent.prototype, "initialPage", void 0);
__decorate([
    Input()
], JwPaginationComponent.prototype, "pageSize", void 0);
__decorate([
    Input()
], JwPaginationComponent.prototype, "maxPages", void 0);
JwPaginationComponent = __decorate([
    Component({
        selector: 'jw-pagination',
        template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
        <a (click)="setPage(1)" class="page-link">First</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
        <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>
    </li>
    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
        <a (click)="setPage(page)" class="page-link">{{page}}</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
        <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
        <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>
    </li>
</ul>`
    })
], JwPaginationComponent);

let JwPaginationModule = class JwPaginationModule {
};
JwPaginationModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [JwPaginationComponent],
        exports: [JwPaginationComponent]
    })
], JwPaginationModule);

/*
 * Public API Surface of jw-pagination
 */

/**
 * Generated bundle index. Do not edit.
 */

export { JwPaginationComponent, JwPaginationModule };
//# sourceMappingURL=jw-angular-pagination.js.map
