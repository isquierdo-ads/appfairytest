/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61e07c725f61287f2f59f893").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61e07c725f6128fac259f899'
    htmlEl.dataset['wfSite'] = '61e07c725f61287f2f59f893'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(D:\\css\\normalize.css);
          @import url(D:\\css\\webflow.css);
          @import url(D:\\css\\test-card-185e58.webflow.css);
        ` }} />
        <span className="af-view">
          <div data-w-id="6064b9d787451871464e775c" className="af-class-body">
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n\t.af-view .af-class-card__sheen{\n  \tpointer-events:none;\n    mix-blend-mode: luminosity;\n  }\n" }} />
            </div>
            <div className="af-class-card">
              <div className="af-class-card__inner">
                <div className="af-class-card__image">
                  <div className="af-class-card_logo"><img src="images/colored.svg" loading="lazy" width={50} alt className="af-class-logo" />
                    <div className="af-class-card__gradient af-class-inner" />
                  </div>
                  <div className="af-class-card__gradient af-class-inner" />
                  <div className="af-class-card__gradient af-class-inner" /><img src="images/61cdfce63626465e34279074_char.png" loading="lazy" alt className="af-class-character" /><img src="images/61cdfce5c237ede658de7369_landscape.png" loading="lazy" alt className="af-class-background" />
                  <div className="af-class-card__body">
                    <h1 className="af-class-card_title">MASTER CHIEF</h1>
                    <div className="af-class-card_info">
                      <div className="af-class-card_info_wrap">
                        <h1 className="af-class-card_type">ERA 1</h1>
                        <h1 className="af-class-card_type">ID: 010100101</h1>
                      </div>
                      <div className="af-class-card_info_line" />
                    </div>
                    <div className="af-class-card__inner-mask" />
                    <div className="af-class-card__gradient af-class-inner" />
                    <div className="af-class-card__content">
                      <div className="af-class-stat">
                        <div className="af-class-stats_number">100</div>
                        <div className="af-class-card_stat_type">Attack</div>
                      </div>
                      <div className="af-class-stat">
                        <div className="af-class-stats_number">100</div>
                        <div className="af-class-card_stat_type">Dextry</div>
                      </div>
                      <div className="af-class-stat">
                        <div className="af-class-stats_number">100</div>
                        <div className="af-class-card_stat_type">Intel</div>
                      </div>
                      <div className="af-class-stat">
                        <div className="af-class-stats_number">100</div>
                        <div className="af-class-card_stat_type">Magic</div>
                      </div>
                      <div className="af-class-stat">
                        <div className="af-class-stats_number">100</div>
                        <div className="af-class-card_stat_type">Attack</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="af-class-card__gradient" />
              </div>
              <div className="af-class-card__gradient af-class-outer" />
              <div className="af-class-card__sheen" />
              <div className="af-class-card__inner-_rarity">
                <div className="af-class-card_rarity">
                  <div className="af-class-card_rarity_level">Level Omega</div>
                  <div className="af-class-card_rarity_description">Legendary</div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */