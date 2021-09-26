/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import ReactTestRenderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";
import KeymapsForm from "../../../../src/settings/components/form/KeymapsForm";
import { FormKeymaps } from "../../../../src/shared/SettingData";
import { expect } from "chai";

describe("settings/form/KeymapsForm", () => {
  describe("render", () => {
    it("renders keymap fields", () => {
      const root = ReactTestRenderer.create(
        <KeymapsForm
          value={FormKeymaps.fromJSON({
            'scroll.vertically?{"count":1}': "j",
            'scroll.vertically?{"count":-1}': "k",
          })}
        />
      ).root;

      const inputj = root.findByProps({ id: 'scroll.vertically?{"count":1}' });
      const inputk = root.findByProps({ id: 'scroll.vertically?{"count":-1}' });

      expect(inputj.props.value).to.equal("j");
      expect(inputk.props.value).to.equal("k");
    });

    it("renders blank value", () => {
      const root = ReactTestRenderer.create(<KeymapsForm />).root;

      const inputj = root.findByProps({ id: 'scroll.vertically?{"count":1}' });
      const inputk = root.findByProps({ id: 'scroll.vertically?{"count":-1}' });

      expect(inputj.props.value).to.be.empty;
      expect(inputk.props.value).to.be.empty;
    });
  });

  describe("onChange event", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
    });

    it("invokes onChange event on edit", (done) => {
      ReactTestUtils.act(() => {
        ReactDOM.render(
          <KeymapsForm
            value={FormKeymaps.fromJSON({
              'scroll.vertically?{"count":1}': "j",
              'scroll.vertically?{"count":-1}': "k",
            })}
            onChange={(value) => {
              expect(value.toJSON()['scroll.vertically?{"count":1}']).to.equal(
                "jjj"
              );
              done();
            }}
          />,
          container
        );
      });

      const input = document.getElementById(
        'scroll.vertically?{"count":1}'
      ) as HTMLInputElement;
      input.value = "jjj";
      ReactTestUtils.Simulate.change(input);
    });
  });
});
