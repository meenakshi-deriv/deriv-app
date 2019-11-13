import { translate } from '../../../utils/lang/i18n';

Blockly.Blocks.math_trig = {
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0: translate('%1 %2'),
            args0   : [
                {
                    type   : 'field_dropdown',
                    name   : 'OP',
                    options: [
                        ['sin', 'SIN'],
                        ['cos', 'COS'],
                        ['tan', 'TAN'],
                        ['asin', 'ASIN'],
                        ['acos', 'ACOS'],
                        ['atan', 'ATAN'],
                    ],
                },
                {
                    type : 'input_value',
                    name : 'NUM',
                    check: 'Number',
                },
            ],
            output         : 'Number',
            outputShape    : Blockly.OUTPUT_SHAPE_ROUND,
            colour         : Blockly.Colours.Base.colour,
            colourSecondary: Blockly.Colours.Base.colourSecondary,
            colourTertiary : Blockly.Colours.Base.colourTertiary,
            tooltip        : translate('Trigonometric functions'),
            category       : Blockly.Categories.Mathematical,
        };
    },
    meta(){
        return {
            'display_name': translate('Trigonometric functions'),
            'description' : translate('This block performs trigonometric functions.'),
        };
    },
    getRequiredInputs() {
        return {
            NUM: null,
        };
    },
};

Blockly.JavaScript.math_trig = Blockly.JavaScript.math_single;
