// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,39,252,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,65,8,1,1,2,1,2,1,2,1,2,1,2,3,2,72,
8,2,1,3,1,3,1,3,1,3,1,3,3,3,79,8,3,1,4,1,4,1,4,1,4,1,4,5,4,86,8,4,10,4,12,
4,89,9,4,1,4,1,4,1,4,1,4,3,4,95,8,4,1,5,1,5,1,5,1,5,3,5,101,8,5,1,5,1,5,
1,5,1,6,1,6,3,6,108,8,6,1,6,3,6,111,8,6,1,7,1,7,3,7,115,8,7,1,8,1,8,1,8,
3,8,120,8,8,1,8,1,8,3,8,124,8,8,1,9,1,9,1,9,5,9,129,8,9,10,9,12,9,132,9,
9,1,10,1,10,1,10,1,10,5,10,138,8,10,10,10,12,10,141,9,10,3,10,143,8,10,1,
11,1,11,1,11,3,11,148,8,11,1,12,1,12,1,12,5,12,153,8,12,10,12,12,12,156,
9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,170,
8,13,1,14,1,14,1,14,3,14,175,8,14,1,14,1,14,1,15,1,15,1,15,5,15,182,8,15,
10,15,12,15,185,9,15,1,16,1,16,5,16,189,8,16,10,16,12,16,192,9,16,1,16,1,
16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,203,8,17,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,3,18,213,8,18,1,19,1,19,1,19,1,20,1,20,3,20,220,8,20,
1,20,1,20,1,20,1,20,1,20,3,20,227,8,20,1,20,1,20,1,20,1,20,1,20,3,20,234,
8,20,3,20,236,8,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,0,2,1,0,8,12,1,0,13,18,276,0,49,1,0,0,0,2,64,1,0,0,0,4,
66,1,0,0,0,6,73,1,0,0,0,8,80,1,0,0,0,10,96,1,0,0,0,12,105,1,0,0,0,14,112,
1,0,0,0,16,116,1,0,0,0,18,125,1,0,0,0,20,142,1,0,0,0,22,144,1,0,0,0,24,149,
1,0,0,0,26,169,1,0,0,0,28,171,1,0,0,0,30,178,1,0,0,0,32,186,1,0,0,0,34,195,
1,0,0,0,36,204,1,0,0,0,38,214,1,0,0,0,40,235,1,0,0,0,42,237,1,0,0,0,44,242,
1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,
0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,0,0,1,53,1,1,0,0,0,54,65,3,10,
5,0,55,65,3,8,4,0,56,65,3,4,2,0,57,65,3,6,3,0,58,65,3,16,8,0,59,65,3,14,
7,0,60,65,3,12,6,0,61,65,3,34,17,0,62,65,3,44,22,0,63,65,3,32,16,0,64,54,
1,0,0,0,64,55,1,0,0,0,64,56,1,0,0,0,64,57,1,0,0,0,64,58,1,0,0,0,64,59,1,
0,0,0,64,60,1,0,0,0,64,61,1,0,0,0,64,62,1,0,0,0,64,63,1,0,0,0,65,3,1,0,0,
0,66,67,5,22,0,0,67,68,5,34,0,0,68,69,5,1,0,0,69,71,3,20,10,0,70,72,5,2,
0,0,71,70,1,0,0,0,71,72,1,0,0,0,72,5,1,0,0,0,73,74,5,23,0,0,74,75,5,34,0,
0,75,76,5,1,0,0,76,78,3,20,10,0,77,79,5,2,0,0,78,77,1,0,0,0,78,79,1,0,0,
0,79,7,1,0,0,0,80,81,5,22,0,0,81,87,5,3,0,0,82,86,3,6,3,0,83,86,3,4,2,0,
84,86,3,8,4,0,85,82,1,0,0,0,85,83,1,0,0,0,85,84,1,0,0,0,86,89,1,0,0,0,87,
85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,4,0,0,91,92,
5,32,0,0,92,94,3,32,16,0,93,95,5,2,0,0,94,93,1,0,0,0,94,95,1,0,0,0,95,9,
1,0,0,0,96,97,5,25,0,0,97,98,5,34,0,0,98,100,5,5,0,0,99,101,3,18,9,0,100,
99,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,103,5,6,0,0,103,104,3,32,
16,0,104,11,1,0,0,0,105,107,5,31,0,0,106,108,3,20,10,0,107,106,1,0,0,0,107,
108,1,0,0,0,108,110,1,0,0,0,109,111,5,2,0,0,110,109,1,0,0,0,110,111,1,0,
0,0,111,13,1,0,0,0,112,114,3,20,10,0,113,115,5,2,0,0,114,113,1,0,0,0,114,
115,1,0,0,0,115,15,1,0,0,0,116,117,5,33,0,0,117,119,5,5,0,0,118,120,3,30,
15,0,119,118,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,123,5,6,0,0,122,
124,5,2,0,0,123,122,1,0,0,0,123,124,1,0,0,0,124,17,1,0,0,0,125,130,5,34,
0,0,126,127,5,7,0,0,127,129,5,34,0,0,128,126,1,0,0,0,129,132,1,0,0,0,130,
128,1,0,0,0,130,131,1,0,0,0,131,19,1,0,0,0,132,130,1,0,0,0,133,143,3,28,
14,0,134,139,3,22,11,0,135,136,7,0,0,0,136,138,3,22,11,0,137,135,1,0,0,0,
138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,143,1,0,0,0,141,139,
1,0,0,0,142,133,1,0,0,0,142,134,1,0,0,0,143,21,1,0,0,0,144,147,3,24,12,0,
145,146,5,1,0,0,146,148,3,24,12,0,147,145,1,0,0,0,147,148,1,0,0,0,148,23,
1,0,0,0,149,154,3,26,13,0,150,151,7,1,0,0,151,153,3,26,13,0,152,150,1,0,
0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,25,1,0,0,0,156,154,
1,0,0,0,157,170,5,35,0,0,158,170,5,36,0,0,159,170,5,34,0,0,160,170,5,37,
0,0,161,170,3,42,21,0,162,163,5,5,0,0,163,164,3,20,10,0,164,165,5,6,0,0,
165,170,1,0,0,0,166,170,3,40,20,0,167,170,3,28,14,0,168,170,3,16,8,0,169,
157,1,0,0,0,169,158,1,0,0,0,169,159,1,0,0,0,169,160,1,0,0,0,169,161,1,0,
0,0,169,162,1,0,0,0,169,166,1,0,0,0,169,167,1,0,0,0,169,168,1,0,0,0,170,
27,1,0,0,0,171,172,5,34,0,0,172,174,5,5,0,0,173,175,3,30,15,0,174,173,1,
0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,177,5,6,0,0,177,29,1,0,0,0,178,
183,3,20,10,0,179,180,5,7,0,0,180,182,3,20,10,0,181,179,1,0,0,0,182,185,
1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,31,1,0,0,0,185,183,1,0,0,0,186,
190,5,3,0,0,187,189,3,2,1,0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,0,
0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,1,0,0,0,193,194,5,4,0,0,194,
33,1,0,0,0,195,196,5,28,0,0,196,197,5,5,0,0,197,198,3,20,10,0,198,199,5,
6,0,0,199,202,3,32,16,0,200,203,3,36,18,0,201,203,3,38,19,0,202,200,1,0,
0,0,202,201,1,0,0,0,202,203,1,0,0,0,203,35,1,0,0,0,204,205,5,30,0,0,205,
206,5,28,0,0,206,207,5,5,0,0,207,208,3,20,10,0,208,209,5,6,0,0,209,212,3,
32,16,0,210,213,3,36,18,0,211,213,3,38,19,0,212,210,1,0,0,0,212,211,1,0,
0,0,212,213,1,0,0,0,213,37,1,0,0,0,214,215,5,30,0,0,215,216,3,32,16,0,216,
39,1,0,0,0,217,219,5,5,0,0,218,220,3,18,9,0,219,218,1,0,0,0,219,220,1,0,
0,0,220,221,1,0,0,0,221,222,5,6,0,0,222,226,5,19,0,0,223,227,3,32,16,0,224,
227,3,20,10,0,225,227,3,40,20,0,226,223,1,0,0,0,226,224,1,0,0,0,226,225,
1,0,0,0,227,236,1,0,0,0,228,229,3,18,9,0,229,233,5,19,0,0,230,234,3,32,16,
0,231,234,3,20,10,0,232,234,3,40,20,0,233,230,1,0,0,0,233,231,1,0,0,0,233,
232,1,0,0,0,234,236,1,0,0,0,235,217,1,0,0,0,235,228,1,0,0,0,236,41,1,0,0,
0,237,238,5,34,0,0,238,239,5,20,0,0,239,240,3,20,10,0,240,241,5,21,0,0,241,
43,1,0,0,0,242,243,5,28,0,0,243,244,5,5,0,0,244,245,3,20,10,0,245,246,5,
6,0,0,246,247,5,29,0,0,247,248,3,2,1,0,248,249,5,30,0,0,249,250,3,2,1,0,
250,45,1,0,0,0,28,49,64,71,78,85,87,94,100,107,110,114,119,123,130,139,142,
147,154,169,174,183,190,202,212,219,226,233,235];


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
                         "listAccess", "inlineIfStatement" ];

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
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2462056488) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 46;
	            this.statement();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
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
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.functionDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.letInDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.letDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.constDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.printStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.expressionStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 60;
	            this.returnStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 61;
	            this.ifStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 62;
	            this.inlineIfStatement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 63;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(biesParser.LET);
	        this.state = 67;
	        this.match(biesParser.ID);
	        this.state = 68;
	        this.match(biesParser.T__0);
	        this.state = 69;
	        this.expression();
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 70;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(biesParser.CONST);
	        this.state = 74;
	        this.match(biesParser.ID);
	        this.state = 75;
	        this.match(biesParser.T__0);
	        this.state = 76;
	        this.expression();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 77;
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
	        this.state = 80;
	        this.match(biesParser.LET);
	        this.state = 81;
	        this.match(biesParser.T__2);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22 || _la===23) {
	            this.state = 85;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 82;
	                this.constDeclaration();
	                break;

	            case 2:
	                this.state = 83;
	                this.letDeclaration();
	                break;

	            case 3:
	                this.state = 84;
	                this.letInDeclaration();
	                break;

	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(biesParser.T__3);
	        this.state = 91;
	        this.match(biesParser.IN);
	        this.state = 92;
	        this.block();
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 93;
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
	        this.state = 96;
	        this.match(biesParser.FUN);
	        this.state = 97;
	        this.match(biesParser.ID);
	        this.state = 98;
	        this.match(biesParser.T__4);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 99;
	            this.parameterList();
	        }

	        this.state = 102;
	        this.match(biesParser.T__5);
	        this.state = 103;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(biesParser.RETURN);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 106;
	            this.expression();

	        }
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 109;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.expression();
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 113;
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
	        this.state = 116;
	        this.match(biesParser.PRINT);
	        this.state = 117;
	        this.match(biesParser.T__4);
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 118;
	            this.argumentList();
	        }

	        this.state = 121;
	        this.match(biesParser.T__5);
	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 122;
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
	        this.state = 125;
	        this.match(biesParser.ID);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 126;
	            this.match(biesParser.T__6);
	            this.state = 127;
	            this.match(biesParser.ID);
	            this.state = 132;
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
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.functionCall();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
	            this.assignment();
	            this.state = 139;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 135;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7936) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 136;
	                    this.assignment(); 
	                }
	                this.state = 141;
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
	        this.state = 144;
	        this.comparison();
	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 145;
	            this.match(biesParser.T__0);
	            this.state = 146;
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
	        this.state = 149;
	        this.factor();
	        this.state = 154;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 150;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 516096) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 151;
	                this.factor(); 
	            }
	            this.state = 156;
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
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157;
	            this.match(biesParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this.match(biesParser.FLOAT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 159;
	            this.match(biesParser.ID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 160;
	            this.match(biesParser.STRING);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
	            this.listAccess();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 162;
	            this.match(biesParser.T__4);
	            this.state = 163;
	            this.expression();
	            this.state = 164;
	            this.match(biesParser.T__5);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 166;
	            this.lambdaExpression();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 167;
	            this.functionCall();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 168;
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
	        this.state = 171;
	        this.match(biesParser.ID);
	        this.state = 172;
	        this.match(biesParser.T__4);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 173;
	            this.argumentList();
	        }

	        this.state = 176;
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
	        this.state = 178;
	        this.expression();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 179;
	            this.match(biesParser.T__6);
	            this.state = 180;
	            this.expression();
	            this.state = 185;
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
	        this.state = 186;
	        this.match(biesParser.T__2);
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2462056488) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 187;
	            this.statement();
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 193;
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
	        this.state = 195;
	        this.match(biesParser.IF);
	        this.state = 196;
	        this.match(biesParser.T__4);
	        this.state = 197;
	        this.expression();
	        this.state = 198;
	        this.match(biesParser.T__5);
	        this.state = 199;
	        this.block();
	        this.state = 202;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 200;
	            this.elseIfStatement();

	        } else if(la_===2) {
	            this.state = 201;
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
	        this.state = 204;
	        this.match(biesParser.ELSE);
	        this.state = 205;
	        this.match(biesParser.IF);
	        this.state = 206;
	        this.match(biesParser.T__4);
	        this.state = 207;
	        this.expression();
	        this.state = 208;
	        this.match(biesParser.T__5);
	        this.state = 209;
	        this.block();
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        if(la_===1) {
	            this.state = 210;
	            this.elseIfStatement();

	        } else if(la_===2) {
	            this.state = 211;
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
	        this.state = 214;
	        this.match(biesParser.ELSE);
	        this.state = 215;
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
	        this.state = 235;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 217;
	            this.match(biesParser.T__4);
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===34) {
	                this.state = 218;
	                this.parameterList();
	            }

	            this.state = 221;
	            this.match(biesParser.T__5);
	            this.state = 222;
	            this.match(biesParser.T__18);
	            this.state = 226;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 223;
	                this.block();
	                break;

	            case 2:
	                this.state = 224;
	                this.expression();
	                break;

	            case 3:
	                this.state = 225;
	                this.lambdaExpression();
	                break;

	            }
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 228;
	            this.parameterList();
	            this.state = 229;
	            this.match(biesParser.T__18);
	            this.state = 233;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 230;
	                this.block();
	                break;

	            case 2:
	                this.state = 231;
	                this.expression();
	                break;

	            case 3:
	                this.state = 232;
	                this.lambdaExpression();
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
	        this.state = 237;
	        this.match(biesParser.ID);
	        this.state = 238;
	        this.match(biesParser.T__19);
	        this.state = 239;
	        this.expression();
	        this.state = 240;
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



	inlineIfStatement() {
	    let localctx = new InlineIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, biesParser.RULE_inlineIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(biesParser.IF);
	        this.state = 243;
	        this.match(biesParser.T__4);
	        this.state = 244;
	        this.expression();
	        this.state = 245;
	        this.match(biesParser.T__5);
	        this.state = 246;
	        this.match(biesParser.THEN);
	        this.state = 247;
	        this.statement();
	        this.state = 248;
	        this.match(biesParser.ELSE);
	        this.state = 249;
	        this.statement();
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
biesParser.RULE_inlineIfStatement = 22;

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

	inlineIfStatement() {
	    return this.getTypedRuleContext(InlineIfStatementContext,0);
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

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	lambdaExpression() {
	    return this.getTypedRuleContext(LambdaExpressionContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
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



class InlineIfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_inlineIfStatement;
    }

	IF() {
	    return this.getToken(biesParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	THEN() {
	    return this.getToken(biesParser.THEN, 0);
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

	ELSE() {
	    return this.getToken(biesParser.ELSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitInlineIfStatement(this);
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
biesParser.InlineIfStatementContext = InlineIfStatementContext; 
