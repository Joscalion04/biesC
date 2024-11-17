// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,39,268,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,5,0,50,8,0,10,0,12,0,53,9,0,1,
0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,68,8,1,1,2,1,2,1,2,
1,2,1,2,3,2,75,8,2,1,3,1,3,1,3,1,3,1,3,3,3,82,8,3,1,4,1,4,1,4,1,4,1,4,5,
4,89,8,4,10,4,12,4,92,9,4,1,4,1,4,1,4,1,4,3,4,98,8,4,1,5,1,5,1,5,1,5,3,5,
104,8,5,1,5,1,5,1,5,1,6,1,6,3,6,111,8,6,1,6,3,6,114,8,6,1,7,1,7,3,7,118,
8,7,1,8,1,8,1,8,3,8,123,8,8,1,8,1,8,3,8,127,8,8,1,9,1,9,1,9,5,9,132,8,9,
10,9,12,9,135,9,9,1,10,1,10,1,10,1,10,5,10,141,8,10,10,10,12,10,144,9,10,
3,10,146,8,10,1,11,1,11,1,11,3,11,151,8,11,1,12,1,12,1,12,5,12,156,8,12,
10,12,12,12,159,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,3,13,173,8,13,1,14,1,14,1,14,3,14,178,8,14,1,14,1,14,1,15,1,15,1,
15,5,15,185,8,15,10,15,12,15,188,9,15,1,16,1,16,5,16,192,8,16,10,16,12,16,
195,9,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,206,8,17,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,216,8,18,1,19,1,19,1,19,1,20,1,20,
3,20,223,8,20,1,20,1,20,1,20,1,20,1,20,3,20,230,8,20,1,20,1,20,1,20,1,20,
1,20,1,20,3,20,238,8,20,3,20,240,8,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,
1,22,1,22,1,22,1,22,5,22,253,8,22,10,22,12,22,256,9,22,1,23,1,23,5,23,260,
8,23,10,23,12,23,263,9,23,1,23,1,23,1,23,0,0,24,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,2,1,0,8,12,1,0,13,18,294,0,51,
1,0,0,0,2,67,1,0,0,0,4,69,1,0,0,0,6,76,1,0,0,0,8,83,1,0,0,0,10,99,1,0,0,
0,12,108,1,0,0,0,14,115,1,0,0,0,16,119,1,0,0,0,18,128,1,0,0,0,20,145,1,0,
0,0,22,147,1,0,0,0,24,152,1,0,0,0,26,172,1,0,0,0,28,174,1,0,0,0,30,181,1,
0,0,0,32,189,1,0,0,0,34,198,1,0,0,0,36,207,1,0,0,0,38,217,1,0,0,0,40,239,
1,0,0,0,42,241,1,0,0,0,44,246,1,0,0,0,46,257,1,0,0,0,48,50,3,2,1,0,49,48,
1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,
0,0,0,54,55,5,0,0,1,55,1,1,0,0,0,56,68,3,10,5,0,57,68,3,8,4,0,58,68,3,4,
2,0,59,68,3,6,3,0,60,68,3,16,8,0,61,68,3,14,7,0,62,68,3,12,6,0,63,68,3,34,
17,0,64,68,3,44,22,0,65,68,3,46,23,0,66,68,3,32,16,0,67,56,1,0,0,0,67,57,
1,0,0,0,67,58,1,0,0,0,67,59,1,0,0,0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,1,
0,0,0,67,63,1,0,0,0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,3,1,0,0,
0,69,70,5,22,0,0,70,71,5,34,0,0,71,72,5,1,0,0,72,74,3,20,10,0,73,75,5,2,
0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,5,1,0,0,0,76,77,5,23,0,0,77,78,5,34,0,
0,78,79,5,1,0,0,79,81,3,20,10,0,80,82,5,2,0,0,81,80,1,0,0,0,81,82,1,0,0,
0,82,7,1,0,0,0,83,84,5,22,0,0,84,90,5,3,0,0,85,89,3,6,3,0,86,89,3,4,2,0,
87,89,3,8,4,0,88,85,1,0,0,0,88,86,1,0,0,0,88,87,1,0,0,0,89,92,1,0,0,0,90,
88,1,0,0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,4,0,0,94,95,
5,32,0,0,95,97,3,32,16,0,96,98,5,2,0,0,97,96,1,0,0,0,97,98,1,0,0,0,98,9,
1,0,0,0,99,100,5,25,0,0,100,101,5,34,0,0,101,103,5,5,0,0,102,104,3,18,9,
0,103,102,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,0,105,106,5,6,0,0,106,107,
3,32,16,0,107,11,1,0,0,0,108,110,5,31,0,0,109,111,3,20,10,0,110,109,1,0,
0,0,110,111,1,0,0,0,111,113,1,0,0,0,112,114,5,2,0,0,113,112,1,0,0,0,113,
114,1,0,0,0,114,13,1,0,0,0,115,117,3,20,10,0,116,118,5,2,0,0,117,116,1,0,
0,0,117,118,1,0,0,0,118,15,1,0,0,0,119,120,5,33,0,0,120,122,5,5,0,0,121,
123,3,30,15,0,122,121,1,0,0,0,122,123,1,0,0,0,123,124,1,0,0,0,124,126,5,
6,0,0,125,127,5,2,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,17,1,0,0,0,128,
133,5,34,0,0,129,130,5,7,0,0,130,132,5,34,0,0,131,129,1,0,0,0,132,135,1,
0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,19,1,0,0,0,135,133,1,0,0,0,136,
146,3,28,14,0,137,142,3,22,11,0,138,139,7,0,0,0,139,141,3,22,11,0,140,138,
1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,146,1,0,0,0,
144,142,1,0,0,0,145,136,1,0,0,0,145,137,1,0,0,0,146,21,1,0,0,0,147,150,3,
24,12,0,148,149,5,1,0,0,149,151,3,24,12,0,150,148,1,0,0,0,150,151,1,0,0,
0,151,23,1,0,0,0,152,157,3,26,13,0,153,154,7,1,0,0,154,156,3,26,13,0,155,
153,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,25,1,0,0,
0,159,157,1,0,0,0,160,173,5,35,0,0,161,173,5,36,0,0,162,173,5,34,0,0,163,
173,5,37,0,0,164,173,3,42,21,0,165,166,5,5,0,0,166,167,3,20,10,0,167,168,
5,6,0,0,168,173,1,0,0,0,169,173,3,40,20,0,170,173,3,28,14,0,171,173,3,16,
8,0,172,160,1,0,0,0,172,161,1,0,0,0,172,162,1,0,0,0,172,163,1,0,0,0,172,
164,1,0,0,0,172,165,1,0,0,0,172,169,1,0,0,0,172,170,1,0,0,0,172,171,1,0,
0,0,173,27,1,0,0,0,174,175,5,34,0,0,175,177,5,5,0,0,176,178,3,30,15,0,177,
176,1,0,0,0,177,178,1,0,0,0,178,179,1,0,0,0,179,180,5,6,0,0,180,29,1,0,0,
0,181,186,3,20,10,0,182,183,5,7,0,0,183,185,3,20,10,0,184,182,1,0,0,0,185,
188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,31,1,0,0,0,188,186,1,0,0,
0,189,193,5,3,0,0,190,192,3,2,1,0,191,190,1,0,0,0,192,195,1,0,0,0,193,191,
1,0,0,0,193,194,1,0,0,0,194,196,1,0,0,0,195,193,1,0,0,0,196,197,5,4,0,0,
197,33,1,0,0,0,198,199,5,28,0,0,199,200,5,5,0,0,200,201,3,20,10,0,201,202,
5,6,0,0,202,205,3,32,16,0,203,206,3,36,18,0,204,206,3,38,19,0,205,203,1,
0,0,0,205,204,1,0,0,0,205,206,1,0,0,0,206,35,1,0,0,0,207,208,5,30,0,0,208,
209,5,28,0,0,209,210,5,5,0,0,210,211,3,20,10,0,211,212,5,6,0,0,212,215,3,
32,16,0,213,216,3,36,18,0,214,216,3,38,19,0,215,213,1,0,0,0,215,214,1,0,
0,0,215,216,1,0,0,0,216,37,1,0,0,0,217,218,5,30,0,0,218,219,3,32,16,0,219,
39,1,0,0,0,220,222,5,5,0,0,221,223,3,18,9,0,222,221,1,0,0,0,222,223,1,0,
0,0,223,224,1,0,0,0,224,225,5,6,0,0,225,229,5,19,0,0,226,230,3,32,16,0,227,
230,3,40,20,0,228,230,3,20,10,0,229,226,1,0,0,0,229,227,1,0,0,0,229,228,
1,0,0,0,230,240,1,0,0,0,231,232,3,18,9,0,232,237,5,19,0,0,233,238,3,32,16,
0,234,238,3,40,20,0,235,238,3,20,10,0,236,238,3,44,22,0,237,233,1,0,0,0,
237,234,1,0,0,0,237,235,1,0,0,0,237,236,1,0,0,0,238,240,1,0,0,0,239,220,
1,0,0,0,239,231,1,0,0,0,240,41,1,0,0,0,241,242,5,34,0,0,242,243,5,20,0,0,
243,244,3,20,10,0,244,245,5,21,0,0,245,43,1,0,0,0,246,247,5,28,0,0,247,248,
5,5,0,0,248,249,3,20,10,0,249,250,5,6,0,0,250,254,3,46,23,0,251,253,3,2,
1,0,252,251,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,
45,1,0,0,0,256,254,1,0,0,0,257,261,5,29,0,0,258,260,3,2,1,0,259,258,1,0,
0,0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,264,1,0,0,0,263,
261,1,0,0,0,264,265,5,30,0,0,265,47,1,0,0,0,30,51,67,74,81,88,90,97,103,
110,113,117,122,126,133,142,145,150,157,172,177,186,193,205,215,222,229,
237,239,254,261];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesParser extends antlr4.Parser {

    static grammarFileName = "bies.g4";
    static literalNames = [ null, "'='", "';'", "'{'", "'}'", "'('", "')'", 
                            "','", "'+'", "'-'", "'*'", "'/'", "'**'", "'>'", 
                            "'<'", "'>='", "'<='", "'=='", "'!='", "'=>'", 
                            "'['", "']'", "'let'", "'const'", "'var'", "'fun'", 
                            "'true'", "'false'", "'if'", "'then'", "'else'", 
                            "'return'", "'in'", "'print'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "LET", 
                             "CONST", "VAR", "FUN", "TRUE", "FALSE", "IF", 
                             "THEN", "ELSE", "RETURN", "IN", "PRINT", "ID", 
                             "INT", "FLOAT", "STRING", "COMMENT", "WS" ];
    static ruleNames = [ "program", "statement", "letDeclaration", "constDeclaration", 
                         "letInDeclaration", "functionDeclaration", "returnStatement", 
                         "expressionStatement", "printStatement", "parameterList", 
                         "expression", "assignment", "comparison", "factor", 
                         "functionCall", "argumentList", "block", "ifStatement", 
                         "elseIfStatement", "elseStatement", "lambdaExpression", 
                         "listAccess", "ifThenStatement", "blockThen" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesParser.ruleNames;
        this.literalNames = biesParser.literalNames;
        this.symbolicNames = biesParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2998927400) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 48;
	            this.statement();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(biesParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesParser.RULE_statement);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.functionDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.letInDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.letDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 59;
	            this.constDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 60;
	            this.printStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 61;
	            this.expressionStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 62;
	            this.returnStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 63;
	            this.ifStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 64;
	            this.ifThenStatement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 65;
	            this.blockThen();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 66;
	            this.block();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letDeclaration() {
	    let localctx = new LetDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesParser.RULE_letDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(biesParser.LET);
	        this.state = 70;
	        this.match(biesParser.ID);
	        this.state = 71;
	        this.match(biesParser.T__0);
	        this.state = 72;
	        this.expression();
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 73;
	            this.match(biesParser.T__1);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constDeclaration() {
	    let localctx = new ConstDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesParser.RULE_constDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(biesParser.CONST);
	        this.state = 77;
	        this.match(biesParser.ID);
	        this.state = 78;
	        this.match(biesParser.T__0);
	        this.state = 79;
	        this.expression();
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 80;
	            this.match(biesParser.T__1);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letInDeclaration() {
	    let localctx = new LetInDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesParser.RULE_letInDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(biesParser.LET);
	        this.state = 84;
	        this.match(biesParser.T__2);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22 || _la===23) {
	            this.state = 88;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 85;
	                this.constDeclaration();
	                break;

	            case 2:
	                this.state = 86;
	                this.letDeclaration();
	                break;

	            case 3:
	                this.state = 87;
	                this.letInDeclaration();
	                break;

	            }
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this.match(biesParser.T__3);
	        this.state = 94;
	        this.match(biesParser.IN);
	        this.state = 95;
	        this.block();
	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 96;
	            this.match(biesParser.T__1);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(biesParser.FUN);
	        this.state = 100;
	        this.match(biesParser.ID);
	        this.state = 101;
	        this.match(biesParser.T__4);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 102;
	            this.parameterList();
	        }

	        this.state = 105;
	        this.match(biesParser.T__5);
	        this.state = 106;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(biesParser.RETURN);
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 109;
	            this.expression();

	        }
	        this.state = 113;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 112;
	            this.match(biesParser.T__1);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.expression();
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 116;
	            this.match(biesParser.T__1);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printStatement() {
	    let localctx = new PrintStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, biesParser.RULE_printStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(biesParser.PRINT);
	        this.state = 120;
	        this.match(biesParser.T__4);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 121;
	            this.argumentList();
	        }

	        this.state = 124;
	        this.match(biesParser.T__5);
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 125;
	            this.match(biesParser.T__1);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, biesParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(biesParser.ID);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 129;
	            this.match(biesParser.T__6);
	            this.state = 130;
	            this.match(biesParser.ID);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.functionCall();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.assignment();
	            this.state = 142;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 138;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7936) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 139;
	                    this.assignment(); 
	                }
	                this.state = 144;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, biesParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.comparison();
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 148;
	            this.match(biesParser.T__0);
	            this.state = 149;
	            this.comparison();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, biesParser.RULE_comparison);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.factor();
	        this.state = 157;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 153;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 516096) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 154;
	                this.factor(); 
	            }
	            this.state = 159;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, biesParser.RULE_factor);
	    try {
	        this.state = 172;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.match(biesParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(biesParser.FLOAT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.match(biesParser.ID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 163;
	            this.match(biesParser.STRING);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 164;
	            this.listAccess();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 165;
	            this.match(biesParser.T__4);
	            this.state = 166;
	            this.expression();
	            this.state = 167;
	            this.match(biesParser.T__5);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 169;
	            this.lambdaExpression();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 170;
	            this.functionCall();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 171;
	            this.printStatement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(biesParser.ID);
	        this.state = 175;
	        this.match(biesParser.T__4);
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 176;
	            this.argumentList();
	        }

	        this.state = 179;
	        this.match(biesParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentList() {
	    let localctx = new ArgumentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, biesParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.expression();
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 182;
	            this.match(biesParser.T__6);
	            this.state = 183;
	            this.expression();
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, biesParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(biesParser.T__2);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2998927400) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 190;
	            this.statement();
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 196;
	        this.match(biesParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, biesParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(biesParser.IF);
	        this.state = 199;
	        this.match(biesParser.T__4);
	        this.state = 200;
	        this.expression();
	        this.state = 201;
	        this.match(biesParser.T__5);
	        this.state = 202;
	        this.block();
	        this.state = 205;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 203;
	            this.elseIfStatement();

	        } else if(la_===2) {
	            this.state = 204;
	            this.elseStatement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfStatement() {
	    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, biesParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(biesParser.ELSE);
	        this.state = 208;
	        this.match(biesParser.IF);
	        this.state = 209;
	        this.match(biesParser.T__4);
	        this.state = 210;
	        this.expression();
	        this.state = 211;
	        this.match(biesParser.T__5);
	        this.state = 212;
	        this.block();
	        this.state = 215;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        if(la_===1) {
	            this.state = 213;
	            this.elseIfStatement();

	        } else if(la_===2) {
	            this.state = 214;
	            this.elseStatement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseStatement() {
	    let localctx = new ElseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, biesParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(biesParser.ELSE);
	        this.state = 218;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lambdaExpression() {
	    let localctx = new LambdaExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, biesParser.RULE_lambdaExpression);
	    var _la = 0;
	    try {
	        this.state = 240;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 220;
	            this.parameterList();
	            this.state = 221;
	            this.match(biesParser.T__18);
	            this.state = 229;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 222;
	                this.lambdaExpression();
	                break;

	            case 2:
	                this.state = 223;
	                this.expression();
	                break;

	            case 3:
	                this.state = 224;
	                this.ifThenStatement();
	                break;

	            case 4:
	                this.state = 225;
	                this.block();
	                break;

	            case 4:
	                this.state = 229;
	                this.ifThenStatement();
	                break;

	            }
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 231;
	            this.parameterList();
	            this.state = 232;
	            this.match(biesParser.T__18);
	            this.state = 238;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 233;
	                this.block();
	                break;

	            case 2:
	                this.state = 234;
	                this.lambdaExpression();
	                break;

	            case 3:
	                this.state = 235;
	                this.expression();
	                break;

	            case 4:
	                this.state = 236;
	                this.ifThenStatement();
	                break;

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listAccess() {
	    let localctx = new ListAccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, biesParser.RULE_listAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(biesParser.ID);
	        this.state = 243;
	        this.match(biesParser.T__19);
	        this.state = 244;
	        this.expression();
	        this.state = 245;
	        this.match(biesParser.T__20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifThenStatement() {
	    let localctx = new IfThenStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, biesParser.RULE_ifThenStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(biesParser.IF);
	        this.state = 248;
	        this.match(biesParser.T__4);
	        this.state = 249;
	        this.expression();
	        this.state = 250;
	        this.match(biesParser.T__5);
	        this.state = 251;
	        this.blockThen();
	        this.state = 255;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 252;
	                this.statement(); 
	            }
	            this.state = 257;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blockThen() {
	    let localctx = new BlockThenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, biesParser.RULE_blockThen);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(biesParser.THEN);
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2998927400) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 259;
	            this.statement();
	            this.state = 264;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 265;
	        this.match(biesParser.ELSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

biesParser.EOF = antlr4.Token.EOF;
biesParser.T__0 = 1;
biesParser.T__1 = 2;
biesParser.T__2 = 3;
biesParser.T__3 = 4;
biesParser.T__4 = 5;
biesParser.T__5 = 6;
biesParser.T__6 = 7;
biesParser.T__7 = 8;
biesParser.T__8 = 9;
biesParser.T__9 = 10;
biesParser.T__10 = 11;
biesParser.T__11 = 12;
biesParser.T__12 = 13;
biesParser.T__13 = 14;
biesParser.T__14 = 15;
biesParser.T__15 = 16;
biesParser.T__16 = 17;
biesParser.T__17 = 18;
biesParser.T__18 = 19;
biesParser.T__19 = 20;
biesParser.T__20 = 21;
biesParser.LET = 22;
biesParser.CONST = 23;
biesParser.VAR = 24;
biesParser.FUN = 25;
biesParser.TRUE = 26;
biesParser.FALSE = 27;
biesParser.IF = 28;
biesParser.THEN = 29;
biesParser.ELSE = 30;
biesParser.RETURN = 31;
biesParser.IN = 32;
biesParser.PRINT = 33;
biesParser.ID = 34;
biesParser.INT = 35;
biesParser.FLOAT = 36;
biesParser.STRING = 37;
biesParser.COMMENT = 38;
biesParser.WS = 39;

biesParser.RULE_program = 0;
biesParser.RULE_statement = 1;
biesParser.RULE_letDeclaration = 2;
biesParser.RULE_constDeclaration = 3;
biesParser.RULE_letInDeclaration = 4;
biesParser.RULE_functionDeclaration = 5;
biesParser.RULE_returnStatement = 6;
biesParser.RULE_expressionStatement = 7;
biesParser.RULE_printStatement = 8;
biesParser.RULE_parameterList = 9;
biesParser.RULE_expression = 10;
biesParser.RULE_assignment = 11;
biesParser.RULE_comparison = 12;
biesParser.RULE_factor = 13;
biesParser.RULE_functionCall = 14;
biesParser.RULE_argumentList = 15;
biesParser.RULE_block = 16;
biesParser.RULE_ifStatement = 17;
biesParser.RULE_elseIfStatement = 18;
biesParser.RULE_elseStatement = 19;
biesParser.RULE_lambdaExpression = 20;
biesParser.RULE_listAccess = 21;
biesParser.RULE_ifThenStatement = 22;
biesParser.RULE_blockThen = 23;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_program;
    }

	EOF() {
	    return this.getToken(biesParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_statement;
    }

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	letInDeclaration() {
	    return this.getTypedRuleContext(LetInDeclarationContext,0);
	};

	letDeclaration() {
	    return this.getTypedRuleContext(LetDeclarationContext,0);
	};

	constDeclaration() {
	    return this.getTypedRuleContext(ConstDeclarationContext,0);
	};

	printStatement() {
	    return this.getTypedRuleContext(PrintStatementContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	ifThenStatement() {
	    return this.getTypedRuleContext(IfThenStatementContext,0);
	};

	blockThen() {
	    return this.getTypedRuleContext(BlockThenContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LetDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_letDeclaration;
    }

	LET() {
	    return this.getToken(biesParser.LET, 0);
	};

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitLetDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_constDeclaration;
    }

	CONST() {
	    return this.getToken(biesParser.CONST, 0);
	};

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitConstDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LetInDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_letInDeclaration;
    }

	LET() {
	    return this.getToken(biesParser.LET, 0);
	};

	IN() {
	    return this.getToken(biesParser.IN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	constDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ConstDeclarationContext,i);
	    }
	};

	letDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LetDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(LetDeclarationContext,i);
	    }
	};

	letInDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LetInDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(LetInDeclarationContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitLetInDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_functionDeclaration;
    }

	FUN() {
	    return this.getToken(biesParser.FUN, 0);
	};

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_returnStatement;
    }

	RETURN() {
	    return this.getToken(biesParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_printStatement;
    }

	PRINT() {
	    return this.getToken(biesParser.PRINT, 0);
	};

	argumentList() {
	    return this.getTypedRuleContext(ArgumentListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitPrintStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_parameterList;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesParser.ID);
	    } else {
	        return this.getToken(biesParser.ID, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_expression;
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_assignment;
    }

	comparison = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_comparison;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitComparison(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_factor;
    }

	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(biesParser.FLOAT, 0);
	};

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	STRING() {
	    return this.getToken(biesParser.STRING, 0);
	};

	listAccess() {
	    return this.getTypedRuleContext(ListAccessContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	lambdaExpression() {
	    return this.getTypedRuleContext(LambdaExpressionContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	printStatement() {
	    return this.getTypedRuleContext(PrintStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_functionCall;
    }

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	argumentList() {
	    return this.getTypedRuleContext(ArgumentListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_argumentList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitArgumentList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(biesParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	elseIfStatement() {
	    return this.getTypedRuleContext(ElseIfStatementContext,0);
	};

	elseStatement() {
	    return this.getTypedRuleContext(ElseStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_elseIfStatement;
    }

	ELSE() {
	    return this.getToken(biesParser.ELSE, 0);
	};

	IF() {
	    return this.getToken(biesParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	elseIfStatement() {
	    return this.getTypedRuleContext(ElseIfStatementContext,0);
	};

	elseStatement() {
	    return this.getTypedRuleContext(ElseStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitElseIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_elseStatement;
    }

	ELSE() {
	    return this.getToken(biesParser.ELSE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitElseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LambdaExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_lambdaExpression;
    }

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	lambdaExpression() {
	    return this.getTypedRuleContext(LambdaExpressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ifThenStatement() {
	    return this.getTypedRuleContext(IfThenStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitLambdaExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListAccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_listAccess;
    }

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitListAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfThenStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_ifThenStatement;
    }

	IF() {
	    return this.getToken(biesParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	blockThen() {
	    return this.getTypedRuleContext(BlockThenContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitIfThenStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockThenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_blockThen;
    }

	THEN() {
	    return this.getToken(biesParser.THEN, 0);
	};

	ELSE() {
	    return this.getToken(biesParser.ELSE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitBlockThen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesParser.ProgramContext = ProgramContext; 
biesParser.StatementContext = StatementContext; 
biesParser.LetDeclarationContext = LetDeclarationContext; 
biesParser.ConstDeclarationContext = ConstDeclarationContext; 
biesParser.LetInDeclarationContext = LetInDeclarationContext; 
biesParser.FunctionDeclarationContext = FunctionDeclarationContext; 
biesParser.ReturnStatementContext = ReturnStatementContext; 
biesParser.ExpressionStatementContext = ExpressionStatementContext; 
biesParser.PrintStatementContext = PrintStatementContext; 
biesParser.ParameterListContext = ParameterListContext; 
biesParser.ExpressionContext = ExpressionContext; 
biesParser.AssignmentContext = AssignmentContext; 
biesParser.ComparisonContext = ComparisonContext; 
biesParser.FactorContext = FactorContext; 
biesParser.FunctionCallContext = FunctionCallContext; 
biesParser.ArgumentListContext = ArgumentListContext; 
biesParser.BlockContext = BlockContext; 
biesParser.IfStatementContext = IfStatementContext; 
biesParser.ElseIfStatementContext = ElseIfStatementContext; 
biesParser.ElseStatementContext = ElseStatementContext; 
biesParser.LambdaExpressionContext = LambdaExpressionContext; 
biesParser.ListAccessContext = ListAccessContext; 
biesParser.IfThenStatementContext = IfThenStatementContext; 
biesParser.BlockThenContext = BlockThenContext; 
