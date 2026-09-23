import { ComponentFixture, TestBed } from "@angular/core/testing";
import { App } from "./app";
import { Calculator } from "./calculator/calculator";

describe("Calculator Component & App", () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, Calculator],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    const appFixture = TestBed.createComponent(App);
    const app = appFixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render title", async () => {
    const appFixture = TestBed.createComponent(App);
    await appFixture.whenStable();
    const compiled = appFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain("Calculatrice de base");
  });

  it("addition values are correct", async () => {
    component.add("6", "2");
    expect(String(component.result)).toBe("8");
  });

  it("addition values are correct on negative numbers", async () => {
    component.add("3", "-4");
    expect(String(component.result)).toBe("-1");
  });

  it("addition works on zero", async () => {
    component.add("3", "0");
    expect(String(component.result)).toBe("3");
  });

  it("subtraction works on positive numbers", async () => {
    component.subtract("5", "3");
    expect(String(component.result)).toBe("2");
  });

  it("subtraction works resulting in negative numbers", async () => {
    component.subtract("2", "8");
    expect(String(component.result)).toBe("-6");
  });

  it("subtraction works with negative input", async () => {
    component.subtract("5", "-3");
    expect(String(component.result)).toBe("8");
  });

  it("multiplication works on positive numbers", async () => {
    component.multiply("4", "3");
    expect(String(component.result)).toBe("12");
  });

  it("multiplication works with negative numbers", async () => {
    component.multiply("-4", "3");
    expect(String(component.result)).toBe("-12");
  });

  it("multiplication by zero results in zero", async () => {
    component.multiply("99", "0");
    expect(String(component.result)).toBe("0");
  });

  it("division works on divisible numbers", async () => {
    component.divide("10", "2");
    expect(String(component.result)).toBe("5");
  });

  it("division works with negative numbers", async () => {
    component.divide("-12", "3");
    expect(String(component.result)).toBe("-4");
  });

  it("division by zero handles infinity", async () => {
    component.divide("10", "0");
    expect(String(component.result)).toBe("Infinity");
  });

  it("handles decimal precision correctly", async () => {
    component.add("0.1", "0.2");
    expect(String(component.result)).toContain("0.3");
  });
});