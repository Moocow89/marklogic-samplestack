/* 
 * Copyright 2012-2015 MarkLogic Corporation 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */ 

// TODO: docs

// TODO: !**/*.md is not protecting markdown files from being deleted!!!
// del bug?

var path = require('path');
var ctx = require('../context');

module.exports = [{
  name: 'clean',
  deps: [],
  func: function (cb) {
    var bRootAll = path.join(ctx.paths.browser.buildsRoot, '**/*');
    var not = '!' + path.join(ctx.paths.browser.buildsRoot, '**/*.md');
    require('del')([bRootAll, not], { force: true }, cb);
  }
}];
