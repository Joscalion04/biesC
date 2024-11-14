// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,34,176,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,5,0,36,8,0,10,0,12,0,39,9,0,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,50,8,1,1,2,1,2,1,2,1,2,1,2,3,2,57,
8,2,1,3,1,3,1,3,1,3,1,3,3,3,64,8,3,1,4,1,4,1,4,1,4,3,4,70,8,4,1,4,1,4,1,
4,1,5,1,5,3,5,77,8,5,1,5,3,5,80,8,5,1,6,1,6,3,6,84,8,6,1,7,1,7,1,7,5,7,89,
8,7,10,7,12,7,92,9,7,1,8,1,8,1,8,5,8,97,8,8,10,8,12,8,100,9,8,1,9,1,9,1,
9,5,9,105,8,9,10,9,12,9,108,9,9,1,10,1,10,1,10,5,10,113,8,10,10,10,12,10,
116,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,126,8,11,1,12,1,12,
1,12,3,12,131,8,12,1,12,1,12,1,13,1,13,1,13,5,13,138,8,13,10,13,12,13,141,
9,13,1,14,1,14,5,14,145,8,14,10,14,12,14,148,9,14,1,14,1,14,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,3,15,160,8,15,1,16,1,16,1,16,1,16,1,16,5,16,
167,8,16,10,16,12,16,170,9,16,1,16,1,16,1,16,1,16,1,16,0,0,17,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,0,3,1,0,6,7,1,0,8,13,1,0,14,16,186,0,
37,1,0,0,0,2,49,1,0,0,0,4,51,1,0,0,0,6,58,1,0,0,0,8,65,1,0,0,0,10,74,1,0,
0,0,12,81,1,0,0,0,14,85,1,0,0,0,16,93,1,0,0,0,18,101,1,0,0,0,20,109,1,0,
0,0,22,125,1,0,0,0,24,127,1,0,0,0,26,134,1,0,0,0,28,142,1,0,0,0,30,151,1,
0,0,0,32,161,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,
0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,0,0,0,40,41,5,0,0,1,41,1,1,0,0,0,
42,50,3,8,4,0,43,50,3,32,16,0,44,50,3,4,2,0,45,50,3,6,3,0,46,50,3,12,6,0,
47,50,3,10,5,0,48,50,3,30,15,0,49,42,1,0,0,0,49,43,1,0,0,0,49,44,1,0,0,0,
49,45,1,0,0,0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,3,1,0,0,0,51,
52,5,19,0,0,52,53,5,30,0,0,53,54,5,1,0,0,54,56,3,16,8,0,55,57,5,2,0,0,56,
55,1,0,0,0,56,57,1,0,0,0,57,5,1,0,0,0,58,59,5,20,0,0,59,60,5,30,0,0,60,61,
5,1,0,0,61,63,3,16,8,0,62,64,5,2,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,7,1,
0,0,0,65,66,5,22,0,0,66,67,5,30,0,0,67,69,5,3,0,0,68,70,3,14,7,0,69,68,1,
0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,5,4,0,0,72,73,3,28,14,0,73,9,1,0,
0,0,74,76,5,27,0,0,75,77,3,16,8,0,76,75,1,0,0,0,76,77,1,0,0,0,77,79,1,0,
0,0,78,80,5,2,0,0,79,78,1,0,0,0,79,80,1,0,0,0,80,11,1,0,0,0,81,83,3,16,8,
0,82,84,5,2,0,0,83,82,1,0,0,0,83,84,1,0,0,0,84,13,1,0,0,0,85,90,5,30,0,0,
86,87,5,5,0,0,87,89,5,30,0,0,88,86,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,
91,1,0,0,0,91,15,1,0,0,0,92,90,1,0,0,0,93,98,3,18,9,0,94,95,7,0,0,0,95,97,
3,18,9,0,96,94,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,17,
1,0,0,0,100,98,1,0,0,0,101,106,3,20,10,0,102,103,7,1,0,0,103,105,3,20,10,
0,104,102,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,19,
1,0,0,0,108,106,1,0,0,0,109,114,3,22,11,0,110,111,7,2,0,0,111,113,3,22,11,
0,112,110,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,21,
1,0,0,0,116,114,1,0,0,0,117,126,5,31,0,0,118,126,5,30,0,0,119,126,5,32,0,
0,120,121,5,3,0,0,121,122,3,16,8,0,122,123,5,4,0,0,123,126,1,0,0,0,124,126,
3,24,12,0,125,117,1,0,0,0,125,118,1,0,0,0,125,119,1,0,0,0,125,120,1,0,0,
0,125,124,1,0,0,0,126,23,1,0,0,0,127,128,5,30,0,0,128,130,5,3,0,0,129,131,
3,26,13,0,130,129,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,4,0,
0,133,25,1,0,0,0,134,139,3,16,8,0,135,136,5,5,0,0,136,138,3,16,8,0,137,135,
1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,27,1,0,0,0,141,
139,1,0,0,0,142,146,5,17,0,0,143,145,3,2,1,0,144,143,1,0,0,0,145,148,1,0,
0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,0,148,146,1,0,0,0,149,
150,5,18,0,0,150,29,1,0,0,0,151,152,5,25,0,0,152,153,5,3,0,0,153,154,3,16,
8,0,154,155,5,4,0,0,155,156,5,29,0,0,156,159,3,28,14,0,157,158,5,26,0,0,
158,160,3,28,14,0,159,157,1,0,0,0,159,160,1,0,0,0,160,31,1,0,0,0,161,162,
5,19,0,0,162,168,5,17,0,0,163,167,3,4,2,0,164,167,3,6,3,0,165,167,3,8,4,
0,166,163,1,0,0,0,166,164,1,0,0,0,166,165,1,0,0,0,167,170,1,0,0,0,168,166,
1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,168,1,0,0,0,171,172,5,18,0,0,
172,173,5,28,0,0,173,174,3,28,14,0,174,33,1,0,0,0,19,37,49,56,63,69,76,79,
83,90,98,106,114,125,130,139,146,159,166,168];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesParser extends antlr4.Parser {

    static grammarFileName = "bies.g4";
    static literalNames = [ null, "'='", "';'", "'('", "')'", "','", "'+'", 
                            "'-'", "'>'", "'<'", "'>='", "'<='", "'=='", 
                            "'!='", "'*'", "'/'", "'**'", "'{'", "'}'", 
                            "'let'", "'const'", "'var'", "'fun'", "'true'", 
                            "'false'", "'if'", "'else'", "'return'", "'in'", 
                            "'then'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "LET", "CONST", "VAR", "FUN", 
                             "TRUE", "FALSE", "IF", "ELSE", "RETURN", "IN", 
                             "THEN", "ID", "INT", "STRING", "COMMENT", "WS" ];
    static ruleNames = [ "program", "statement", "letDeclaration", "constDeclaration", 
                         "functionDeclaration", "returnStatement", "expressionStatement", 
                         "parameterList", "expression", "comparison", "term", 
                         "factor", "functionCall", "argumentList", "block", 
                         "ifStatement", "letInExpression" ];

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
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 3)) & ~0x1f) === 0 && ((1 << (_la - 3)) & 961216513) !== 0)) {
	            this.state = 34;
	            this.statement();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
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
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.functionDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.letInExpression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.letDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.constDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 46;
	            this.expressionStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 47;
	            this.returnStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 48;
	            this.ifStatement();
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
	        this.state = 51;
	        this.match(biesParser.LET);
	        this.state = 52;
	        this.match(biesParser.ID);
	        this.state = 53;
	        this.match(biesParser.T__0);
	        this.state = 54;
	        this.expression();
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 55;
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
	        this.state = 58;
	        this.match(biesParser.CONST);
	        this.state = 59;
	        this.match(biesParser.ID);
	        this.state = 60;
	        this.match(biesParser.T__0);
	        this.state = 61;
	        this.expression();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 62;
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
	        this.state = 65;
	        this.match(biesParser.FUN);
	        this.state = 66;
	        this.match(biesParser.ID);
	        this.state = 67;
	        this.match(biesParser.T__2);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 68;
	            this.parameterList();
	        }

	        this.state = 71;
	        this.match(biesParser.T__3);
	        this.state = 72;
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
	        this.state = 74;
	        this.match(biesParser.RETURN);
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 75;
	            this.expression();

	        }
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 78;
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
	        this.state = 81;
	        this.expression();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 82;
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
	        this.state = 85;
	        this.match(biesParser.ID);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 86;
	            this.match(biesParser.T__4);
	            this.state = 87;
	            this.match(biesParser.ID);
	            this.state = 92;
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
	        this.state = 93;
	        this.comparison();
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 94;
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 95;
	            this.comparison();
	            this.state = 100;
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
	        this.state = 101;
	        this.term();
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16128) !== 0)) {
	            this.state = 102;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16128) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 103;
	            this.term();
	            this.state = 108;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.factor();
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0)) {
	            this.state = 110;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 111;
	            this.factor();
	            this.state = 116;
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
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.match(biesParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.match(biesParser.ID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.match(biesParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 120;
	            this.match(biesParser.T__2);
	            this.state = 121;
	            this.expression();
	            this.state = 122;
	            this.match(biesParser.T__3);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 124;
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
	        this.state = 127;
	        this.match(biesParser.ID);
	        this.state = 128;
	        this.match(biesParser.T__2);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 3)) & ~0x1f) === 0 && ((1 << (_la - 3)) & 939524097) !== 0)) {
	            this.state = 129;
	            this.argumentList();
	        }

	        this.state = 132;
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
	        this.state = 134;
	        this.expression();
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 135;
	            this.match(biesParser.T__4);
	            this.state = 136;
	            this.expression();
	            this.state = 141;
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
	        this.state = 142;
	        this.match(biesParser.T__16);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 3)) & ~0x1f) === 0 && ((1 << (_la - 3)) & 961216513) !== 0)) {
	            this.state = 143;
	            this.statement();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 149;
	        this.match(biesParser.T__17);
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
	        this.state = 151;
	        this.match(biesParser.IF);
	        this.state = 152;
	        this.match(biesParser.T__2);
	        this.state = 153;
	        this.expression();
	        this.state = 154;
	        this.match(biesParser.T__3);
	        this.state = 155;
	        this.match(biesParser.THEN);
	        this.state = 156;
	        this.block();
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 157;
	            this.match(biesParser.ELSE);
	            this.state = 158;
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



	letInExpression() {
	    let localctx = new LetInExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, biesParser.RULE_letInExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(biesParser.LET);
	        this.state = 162;
	        this.match(biesParser.T__16);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 5767168) !== 0)) {
	            this.state = 166;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 19:
	                this.state = 163;
	                this.letDeclaration();
	                break;
	            case 20:
	                this.state = 164;
	                this.constDeclaration();
	                break;
	            case 22:
	                this.state = 165;
	                this.functionDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 171;
	        this.match(biesParser.T__17);
	        this.state = 172;
	        this.match(biesParser.IN);
	        this.state = 173;
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
biesParser.LET = 19;
biesParser.CONST = 20;
biesParser.VAR = 21;
biesParser.FUN = 22;
biesParser.TRUE = 23;
biesParser.FALSE = 24;
biesParser.IF = 25;
biesParser.ELSE = 26;
biesParser.RETURN = 27;
biesParser.IN = 28;
biesParser.THEN = 29;
biesParser.ID = 30;
biesParser.INT = 31;
biesParser.STRING = 32;
biesParser.COMMENT = 33;
biesParser.WS = 34;

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
biesParser.RULE_letInExpression = 16;

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

	letInExpression() {
	    return this.getTypedRuleContext(LetInExpressionContext,0);
	};

	letDeclaration() {
	    return this.getTypedRuleContext(LetDeclarationContext,0);
	};

	constDeclaration() {
	    return this.getTypedRuleContext(ConstDeclarationContext,0);
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

	THEN() {
	    return this.getToken(biesParser.THEN, 0);
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



class LetInExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_letInExpression;
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

	functionDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclarationContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitLetInExpression(this);
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
biesParser.LetInExpressionContext = LetInExpressionContext; 
