// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,31,155,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,47,8,1,1,2,1,2,1,2,1,2,1,2,3,2,54,8,2,1,3,1,3,
1,3,1,3,1,3,3,3,61,8,3,1,4,1,4,1,4,1,4,3,4,67,8,4,1,4,1,4,1,4,1,5,1,5,3,
5,74,8,5,1,5,3,5,77,8,5,1,6,1,6,3,6,81,8,6,1,7,1,7,1,7,5,7,86,8,7,10,7,12,
7,89,9,7,1,8,1,8,1,8,5,8,94,8,8,10,8,12,8,97,9,8,1,9,1,9,1,9,3,9,102,8,9,
1,10,1,10,1,10,5,10,107,8,10,10,10,12,10,110,9,10,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,3,11,120,8,11,1,12,1,12,1,12,3,12,125,8,12,1,12,1,12,1,
13,1,13,1,13,5,13,132,8,13,10,13,12,13,135,9,13,1,14,1,14,5,14,139,8,14,
10,14,12,14,142,9,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,153,
8,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,3,1,0,6,7,
1,0,8,13,1,0,14,15,162,0,35,1,0,0,0,2,46,1,0,0,0,4,48,1,0,0,0,6,55,1,0,0,
0,8,62,1,0,0,0,10,71,1,0,0,0,12,78,1,0,0,0,14,82,1,0,0,0,16,90,1,0,0,0,18,
98,1,0,0,0,20,103,1,0,0,0,22,119,1,0,0,0,24,121,1,0,0,0,26,128,1,0,0,0,28,
136,1,0,0,0,30,145,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,0,0,35,
33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,5,0,0,1,39,1,
1,0,0,0,40,47,3,4,2,0,41,47,3,6,3,0,42,47,3,12,6,0,43,47,3,8,4,0,44,47,3,
10,5,0,45,47,3,30,15,0,46,40,1,0,0,0,46,41,1,0,0,0,46,42,1,0,0,0,46,43,1,
0,0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,3,1,0,0,0,48,49,5,18,0,0,49,50,5,27,
0,0,50,51,5,1,0,0,51,53,3,16,8,0,52,54,5,2,0,0,53,52,1,0,0,0,53,54,1,0,0,
0,54,5,1,0,0,0,55,56,5,19,0,0,56,57,5,27,0,0,57,58,5,1,0,0,58,60,3,16,8,
0,59,61,5,2,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,7,1,0,0,0,62,63,5,21,0,0,
63,64,5,27,0,0,64,66,5,3,0,0,65,67,3,14,7,0,66,65,1,0,0,0,66,67,1,0,0,0,
67,68,1,0,0,0,68,69,5,4,0,0,69,70,3,28,14,0,70,9,1,0,0,0,71,73,5,26,0,0,
72,74,3,16,8,0,73,72,1,0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,75,77,5,2,0,0,76,
75,1,0,0,0,76,77,1,0,0,0,77,11,1,0,0,0,78,80,3,16,8,0,79,81,5,2,0,0,80,79,
1,0,0,0,80,81,1,0,0,0,81,13,1,0,0,0,82,87,5,27,0,0,83,84,5,5,0,0,84,86,5,
27,0,0,85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,15,1,0,
0,0,89,87,1,0,0,0,90,95,3,18,9,0,91,92,7,0,0,0,92,94,3,18,9,0,93,91,1,0,
0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,17,1,0,0,0,97,95,1,0,0,
0,98,101,3,20,10,0,99,100,7,1,0,0,100,102,3,20,10,0,101,99,1,0,0,0,101,102,
1,0,0,0,102,19,1,0,0,0,103,108,3,22,11,0,104,105,7,2,0,0,105,107,3,22,11,
0,106,104,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,21,
1,0,0,0,110,108,1,0,0,0,111,120,5,28,0,0,112,120,5,27,0,0,113,120,5,29,0,
0,114,115,5,3,0,0,115,116,3,16,8,0,116,117,5,4,0,0,117,120,1,0,0,0,118,120,
3,24,12,0,119,111,1,0,0,0,119,112,1,0,0,0,119,113,1,0,0,0,119,114,1,0,0,
0,119,118,1,0,0,0,120,23,1,0,0,0,121,122,5,27,0,0,122,124,5,3,0,0,123,125,
3,26,13,0,124,123,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,127,5,4,0,
0,127,25,1,0,0,0,128,133,3,16,8,0,129,130,5,5,0,0,130,132,3,16,8,0,131,129,
1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,27,1,0,0,0,135,
133,1,0,0,0,136,140,5,16,0,0,137,139,3,2,1,0,138,137,1,0,0,0,139,142,1,0,
0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,140,1,0,0,0,143,
144,5,17,0,0,144,29,1,0,0,0,145,146,5,24,0,0,146,147,5,3,0,0,147,148,3,16,
8,0,148,149,5,4,0,0,149,152,3,28,14,0,150,151,5,25,0,0,151,153,3,28,14,0,
152,150,1,0,0,0,152,153,1,0,0,0,153,31,1,0,0,0,17,35,46,53,60,66,73,76,80,
87,95,101,108,119,124,133,140,152];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesParser extends antlr4.Parser {

    static grammarFileName = "bies.g4";
    static literalNames = [ null, "'='", "';'", "'('", "')'", "','", "'+'", 
                            "'-'", "'>'", "'<'", "'>='", "'<='", "'=='", 
                            "'!='", "'*'", "'/'", "'{'", "'}'", "'let'", 
                            "'const'", "'var'", "'fun'", "'true'", "'false'", 
                            "'if'", "'else'", "'return'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "LET", "CONST", "VAR", "FUN", "TRUE", 
                             "FALSE", "IF", "ELSE", "RETURN", "ID", "INT", 
                             "STRING", "COMMENT", "WS" ];
    static ruleNames = [ "program", "statement", "letDeclaration", "constDeclaration", 
                         "functionDeclaration", "returnStatement", "expressionStatement", 
                         "parameterList", "expression", "comparison", "term", 
                         "factor", "functionCall", "argumentList", "block", 
                         "ifStatement" ];

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
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1026293768) !== 0)) {
	            this.state = 32;
	            this.statement();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
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
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.letDeclaration();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.constDeclaration();
	            break;
	        case 3:
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.expressionStatement();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 43;
	            this.functionDeclaration();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 44;
	            this.returnStatement();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 45;
	            this.ifStatement();
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



	letDeclaration() {
	    let localctx = new LetDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesParser.RULE_letDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(biesParser.LET);
	        this.state = 49;
	        this.match(biesParser.ID);
	        this.state = 50;
	        this.match(biesParser.T__0);
	        this.state = 51;
	        this.expression();
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 52;
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
	        this.state = 55;
	        this.match(biesParser.CONST);
	        this.state = 56;
	        this.match(biesParser.ID);
	        this.state = 57;
	        this.match(biesParser.T__0);
	        this.state = 58;
	        this.expression();
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 59;
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
	    this.enterRule(localctx, 8, biesParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(biesParser.FUN);
	        this.state = 63;
	        this.match(biesParser.ID);
	        this.state = 64;
	        this.match(biesParser.T__2);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 65;
	            this.parameterList();
	        }

	        this.state = 68;
	        this.match(biesParser.T__3);
	        this.state = 69;
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
	    this.enterRule(localctx, 10, biesParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(biesParser.RETURN);
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 72;
	            this.expression();

	        }
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 75;
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
	    this.enterRule(localctx, 12, biesParser.RULE_expressionStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.expression();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 79;
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
	    this.enterRule(localctx, 14, biesParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(biesParser.ID);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 83;
	            this.match(biesParser.T__4);
	            this.state = 84;
	            this.match(biesParser.ID);
	            this.state = 89;
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
	    this.enterRule(localctx, 16, biesParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.comparison();
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 91;
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 92;
	            this.comparison();
	            this.state = 97;
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, biesParser.RULE_comparison);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.term();
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 16128) !== 0)) {
	            this.state = 99;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16128) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 100;
	            this.term();
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.factor();
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 104;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 105;
	            this.factor();
	            this.state = 110;
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, biesParser.RULE_factor);
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.match(biesParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.match(biesParser.ID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.match(biesParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.match(biesParser.T__2);
	            this.state = 115;
	            this.expression();
	            this.state = 116;
	            this.match(biesParser.T__3);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 118;
	            this.functionCall();
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
	    this.enterRule(localctx, 24, biesParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(biesParser.ID);
	        this.state = 122;
	        this.match(biesParser.T__2);
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 939524104) !== 0)) {
	            this.state = 123;
	            this.argumentList();
	        }

	        this.state = 126;
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



	argumentList() {
	    let localctx = new ArgumentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, biesParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.expression();
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 129;
	            this.match(biesParser.T__4);
	            this.state = 130;
	            this.expression();
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(biesParser.T__15);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1026293768) !== 0)) {
	            this.state = 137;
	            this.statement();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 143;
	        this.match(biesParser.T__16);
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
	    this.enterRule(localctx, 30, biesParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(biesParser.IF);
	        this.state = 146;
	        this.match(biesParser.T__2);
	        this.state = 147;
	        this.expression();
	        this.state = 148;
	        this.match(biesParser.T__3);
	        this.state = 149;
	        this.block();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 150;
	            this.match(biesParser.ELSE);
	            this.state = 151;
	            this.block();
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
biesParser.LET = 18;
biesParser.CONST = 19;
biesParser.VAR = 20;
biesParser.FUN = 21;
biesParser.TRUE = 22;
biesParser.FALSE = 23;
biesParser.IF = 24;
biesParser.ELSE = 25;
biesParser.RETURN = 26;
biesParser.ID = 27;
biesParser.INT = 28;
biesParser.STRING = 29;
biesParser.COMMENT = 30;
biesParser.WS = 31;

biesParser.RULE_program = 0;
biesParser.RULE_statement = 1;
biesParser.RULE_letDeclaration = 2;
biesParser.RULE_constDeclaration = 3;
biesParser.RULE_functionDeclaration = 4;
biesParser.RULE_returnStatement = 5;
biesParser.RULE_expressionStatement = 6;
biesParser.RULE_parameterList = 7;
biesParser.RULE_expression = 8;
biesParser.RULE_comparison = 9;
biesParser.RULE_term = 10;
biesParser.RULE_factor = 11;
biesParser.RULE_functionCall = 12;
biesParser.RULE_argumentList = 13;
biesParser.RULE_block = 14;
biesParser.RULE_ifStatement = 15;

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

	letDeclaration() {
	    return this.getTypedRuleContext(LetDeclarationContext,0);
	};

	constDeclaration() {
	    return this.getTypedRuleContext(ConstDeclarationContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
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
	        return visitor.visitExpression(this);
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

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
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



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_term;
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
	        return visitor.visitTerm(this);
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

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	STRING() {
	    return this.getToken(biesParser.STRING, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
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

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(biesParser.ELSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesParser.ProgramContext = ProgramContext; 
biesParser.StatementContext = StatementContext; 
biesParser.LetDeclarationContext = LetDeclarationContext; 
biesParser.ConstDeclarationContext = ConstDeclarationContext; 
biesParser.FunctionDeclarationContext = FunctionDeclarationContext; 
biesParser.ReturnStatementContext = ReturnStatementContext; 
biesParser.ExpressionStatementContext = ExpressionStatementContext; 
biesParser.ParameterListContext = ParameterListContext; 
biesParser.ExpressionContext = ExpressionContext; 
biesParser.ComparisonContext = ComparisonContext; 
biesParser.TermContext = TermContext; 
biesParser.FactorContext = FactorContext; 
biesParser.FunctionCallContext = FunctionCallContext; 
biesParser.ArgumentListContext = ArgumentListContext; 
biesParser.BlockContext = BlockContext; 
biesParser.IfStatementContext = IfStatementContext; 
