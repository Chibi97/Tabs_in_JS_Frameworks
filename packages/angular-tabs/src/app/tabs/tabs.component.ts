import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

interface IndexedTab {
  idx: number;
  label: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  labels: IndexedTab[] = [];
  activeTab: TabComponent = null;
  activeTabId: number = 0;

  @ContentChildren(TabComponent) allTabs: QueryList<TabComponent>;

  constructor() {}

  ngAfterContentInit(): void {
    this.labels = this.allTabs.map((tabComponent, idx) => ({
      label: tabComponent.label,
      idx
    }));
    this.activeTab = this.allTabs.toArray()[1];
    this.activeTabId = 1;
  }

  setActiveTab(idx: number) {
    this.activeTab = this.allTabs.toArray()[idx];
    this.activeTabId = idx;
  }

  isActiveId(idx: number) {
    return this.activeTabId === idx;
  }

  getActiveTabContent() {
    if (this.activeTab) {
      return this.activeTab.tabContent;
    }

    return null;
  }
}
