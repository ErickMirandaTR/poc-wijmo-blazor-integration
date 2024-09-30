import {
  SafButton, SafIcon, SafBadge, SafText, SafTextfield, SafTextarea, SafEmptyState,
  SafSwitch, SafSplitter, SafCard, SafAnchor, SafFooter, SafList, SafListItem,
  SafLogo, SafProductHeader, SafMenu, SafMenuItem, SafDivider,
  SafProgress, SafProgressRing, SafAlert, SafTabs, SafTab, SafSideNav, SafProductHeaderItem,
  SafDrawer, SafToolbar, SafCheckbox, SafListbox, SafCombobox, SafSelect, SafListboxOption,
  SafDialog, SafPagination, SafAvatar, SafBreadcrumb, SafBreadcrumbItem, SafFacetedFilter,
  SafFacetCategory, SafFacetItem, SafSrOnly, SafRadio, SafRadioGroup, SafTreeView, SafTreeItem,
  SafSearchField, SafButtonGroup, SafNumberField, SafStepper, SafStep, SafAccordion, SafAccordionItem, SafStatus
} from "@saffron/core-components";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  SafButton();
SafIcon();
SafBadge();
SafTextarea();
SafEmptyState();
SafSwitch();
SafSplitter();
SafCard();
SafText();
SafTextfield();
SafAnchor();
SafFooter();
SafList();
SafListItem();
SafLogo();
SafProductHeader();
SafMenu();
SafMenuItem();
SafDivider();
SafProgress();
SafProgressRing();
SafAlert();
SafTabs();
SafTab();
SafSideNav();
SafProductHeaderItem();
SafDrawer();
SafToolbar();
SafCheckbox();
SafListbox();
SafCombobox();
SafSelect();
SafListboxOption();
SafDialog();
SafPagination();
SafAvatar();
SafBreadcrumb();
SafBreadcrumbItem();
SafFacetedFilter();
SafFacetCategory();
SafFacetItem();
SafSrOnly();
SafRadio();
SafRadioGroup();
SafTreeView();
SafTreeItem();
SafSearchField();
SafButtonGroup();
SafNumberField();
SafStepper();
SafStep();
SafStatus();
SafAccordion();
SafAccordionItem();