import { AppPage } from './app.po';
import { browser, logging, element, by} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('component-communication app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
  const _heroNames = ['Dr IQ', 'Magneta', 'Bombasto'];
  const _masterName = 'Master';

  it('should pass properties to children properly', function () {
    const parent = element.all(by.tagName('app-hero-parent')).get(0);
    const heroes = parent.all(by.tagName('app-hero-child'));

    for (const i = 0; i < _heroNames.length; i++) {
      const childTitle = heroes.get(i).element(by.tagName('h3')).getText();
      const childDetail = heroes.get(i).element(by.tagName('p')).getText();
      expect(childTitle).toEqual(_heroNames[i] + `s'name`);
      expect(childDetail).toContain(_masterName);
    }
  });
});
