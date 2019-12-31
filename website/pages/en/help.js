/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
    const { config: siteConfig, language = '' } = props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
        <div className="docMainWrapper wrapper">
            <Container className="mainContainer documentContainer postContainer">
                <div className="post">
                    <header className="postHeader">
                        <h1>Login</h1>
                    </header>
                    <form action="" class="box">
                        <div class="field">
                            <label for="" class="label">Email</label>
                            <div class="field">
                                <input type="email" placeholder="e.g. example@blueteq.com" class="input" required />
                            </div>
                            <label for="" class="label">Password</label>
                            <div class="field">
                                <input type="password" placeholder="*******" class="input" required />
                            </div>
                            <div class="field">
                                <button class="button is-success">

                                    Login
                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
}

module.exports = Help;
