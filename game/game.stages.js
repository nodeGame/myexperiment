/**
 * # Game stages definition file
 * Copyright(c) 2019 Stefano <info@nodegame.org>
 * MIT Licensed
 *
 * Stages are defined using the stager API
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = function(stager, settings) {

     stager
        .next('instructions')
        .next('quiz')
        .next('grouping')
        .repeat('game', settings.REPEAT)
        .next('feedback')
        .next('end')
        .gameover();

    // Modify the stager to skip one stage.
    stager.skip('grouping');
};
