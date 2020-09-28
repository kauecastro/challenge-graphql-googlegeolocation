import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../common/theme";
import { render } from "@testing-library/react";
import Footer from "./index";
import { axe } from "jest-axe";
import "jest-axe/extend-expect";

describe("[Component] - Footer", () => {
  it("Should render Footer", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="sc-bdnylx hMxvJI"
        >
          <div
            class="sc-gtssRu bOouAk"
          >
            <p
              class="sc-dlnjPT gXbpAW"
            >
               
              © 2020 Zé Delivery - Todos os direitos reservados.
               
            </p>
          </div>
        </footer>
      </div>
    `);
  });

  test("Footer is acessible", async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
