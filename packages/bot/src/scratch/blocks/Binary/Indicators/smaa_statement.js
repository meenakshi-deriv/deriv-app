import { translate } from '../../../../utils/lang/i18n';

Blockly.Blocks.smaa_statement = {
    protected_statements : ['STATEMENT'],
    required_child_blocks: ['input_list', 'period'],
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0: translate('set %1 to Simple Moving Average Array %2'),
            message1: '%1',
            args0   : [
                {
                    type    : 'field_variable',
                    name    : 'VARIABLE',
                    variable: 'smaa',
                },
                {
                    type: 'input_dummy',
                },
            ],
            args1: [
                {
                    type : 'input_statement',
                    name : 'STATEMENT',
                    check: null,
                },
            ],
            colour           : Blockly.Colours.Base.colour,
            colourSecondary  : Blockly.Colours.Base.colourSecondary,
            colourTertiary   : Blockly.Colours.Base.colourTertiary,
            tooltip          : translate('Calculates Simple Moving Average line from a list with a period'),
            previousStatement: null,
            nextStatement    : null,
            category         : Blockly.Categories.Indicators,
        };
    },
    meta(){
        return {
            'display_name': translate('Simple Moving Average Array (SMAA)'),
            'description' : translate('Similar to SMA, this block gives you the entire SMA line containing a list of all values for a given period.'),
        };
    },
    onchange: Blockly.Blocks.bb_statement.onchange,
};

Blockly.JavaScript.smaa_statement = block => {
    // eslint-disable-next-line no-underscore-dangle
    const var_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
    const input    = block.childValueToCode('input_list', 'INPUT_LIST');
    const period   = block.childValueToCode('period', 'PERIOD');
    const code     = `${var_name} = Bot.smaa(${input}, ${period});\n`;
    
    return code;
};
