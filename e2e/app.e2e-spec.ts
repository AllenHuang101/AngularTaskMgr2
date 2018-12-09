import { TaskmgrPage } from './app.po';

describe('taskmgr App', () => {
  let page: TaskmgrPage;

  beforeEach(() => {
    page = new TaskmgrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
