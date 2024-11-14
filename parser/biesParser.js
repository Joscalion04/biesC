// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,39,215,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,3,1,59,8,1,1,2,1,2,1,2,1,2,1,2,3,2,66,8,2,1,3,1,3,1,3,1,3,1,3,3,
3,73,8,3,1,4,1,4,1,4,1,4,5,4,79,8,4,10,4,12,4,82,9,4,1,4,1,4,1,4,1,4,1,5,
1,5,1,5,1,5,3,5,92,8,5,1,5,1,5,1,5,1,6,1,6,3,6,99,8,6,1,6,3,6,102,8,6,1,
7,1,7,3,7,106,8,7,1,8,1,8,1,8,3,8,111,8,8,1,8,1,8,3,8,115,8,8,1,9,1,9,1,
9,5,9,120,8,9,10,9,12,9,123,9,9,1,10,1,10,1,10,5,10,128,8,10,10,10,12,10,
131,9,10,1,11,1,11,1,11,5,11,136,8,11,10,11,12,11,139,9,11,1,12,1,12,1,12,
3,12,144,8,12,1,13,1,13,1,13,5,13,149,8,13,10,13,12,13,152,9,13,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,165,8,14,1,15,1,15,1,15,
3,15,170,8,15,1,15,1,15,1,16,1,16,1,16,5,16,177,8,16,10,16,12,16,180,9,16,
1,17,1,17,5,17,184,8,17,10,17,12,17,187,9,17,1,17,1,17,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,3,18,198,8,18,1,19,1,19,3,19,202,8,19,1,19,1,19,1,19,1,
19,3,19,208,8,19,1,20,1,20,1,20,1,20,1,20,1,20,0,0,21,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,0,3,1,0,8,9,1,0,10,15,1,0,16,18,229,
0,45,1,0,0,0,2,58,1,0,0,0,4,60,1,0,0,0,6,67,1,0,0,0,8,74,1,0,0,0,10,87,1,
0,0,0,12,96,1,0,0,0,14,103,1,0,0,0,16,107,1,0,0,0,18,116,1,0,0,0,20,124,
1,0,0,0,22,132,1,0,0,0,24,140,1,0,0,0,26,145,1,0,0,0,28,164,1,0,0,0,30,166,
1,0,0,0,32,173,1,0,0,0,34,181,1,0,0,0,36,190,1,0,0,0,38,199,1,0,0,0,40,209,
1,0,0,0,42,44,3,2,1,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,
0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,5,0,0,1,49,1,1,0,0,0,50,59,3,10,
5,0,51,59,3,8,4,0,52,59,3,4,2,0,53,59,3,6,3,0,54,59,3,16,8,0,55,59,3,14,
7,0,56,59,3,12,6,0,57,59,3,36,18,0,58,50,1,0,0,0,58,51,1,0,0,0,58,52,1,0,
0,0,58,53,1,0,0,0,58,54,1,0,0,0,58,55,1,0,0,0,58,56,1,0,0,0,58,57,1,0,0,
0,59,3,1,0,0,0,60,61,5,22,0,0,61,62,5,34,0,0,62,63,5,1,0,0,63,65,3,20,10,
0,64,66,5,2,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,5,1,0,0,0,67,68,5,23,0,0,
68,69,5,34,0,0,69,70,5,1,0,0,70,72,3,20,10,0,71,73,5,2,0,0,72,71,1,0,0,0,
72,73,1,0,0,0,73,7,1,0,0,0,74,75,5,22,0,0,75,80,5,3,0,0,76,79,3,6,3,0,77,
79,3,4,2,0,78,76,1,0,0,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,
1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,5,4,0,0,84,85,5,31,0,0,85,86,3,
34,17,0,86,9,1,0,0,0,87,88,5,25,0,0,88,89,5,34,0,0,89,91,5,5,0,0,90,92,3,
18,9,0,91,90,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,94,5,6,0,0,94,95,3,34,
17,0,95,11,1,0,0,0,96,98,5,30,0,0,97,99,3,20,10,0,98,97,1,0,0,0,98,99,1,
0,0,0,99,101,1,0,0,0,100,102,5,2,0,0,101,100,1,0,0,0,101,102,1,0,0,0,102,
13,1,0,0,0,103,105,3,20,10,0,104,106,5,2,0,0,105,104,1,0,0,0,105,106,1,0,
0,0,106,15,1,0,0,0,107,108,5,33,0,0,108,110,5,5,0,0,109,111,3,32,16,0,110,
109,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,114,5,6,0,0,113,115,5,2,
0,0,114,113,1,0,0,0,114,115,1,0,0,0,115,17,1,0,0,0,116,121,5,34,0,0,117,
118,5,7,0,0,118,120,5,34,0,0,119,117,1,0,0,0,120,123,1,0,0,0,121,119,1,0,
0,0,121,122,1,0,0,0,122,19,1,0,0,0,123,121,1,0,0,0,124,129,3,22,11,0,125,
126,7,0,0,0,126,128,3,22,11,0,127,125,1,0,0,0,128,131,1,0,0,0,129,127,1,
0,0,0,129,130,1,0,0,0,130,21,1,0,0,0,131,129,1,0,0,0,132,137,3,24,12,0,133,
134,5,1,0,0,134,136,3,24,12,0,135,133,1,0,0,0,136,139,1,0,0,0,137,135,1,
0,0,0,137,138,1,0,0,0,138,23,1,0,0,0,139,137,1,0,0,0,140,143,3,26,13,0,141,
142,7,1,0,0,142,144,3,26,13,0,143,141,1,0,0,0,143,144,1,0,0,0,144,25,1,0,
0,0,145,150,3,28,14,0,146,147,7,2,0,0,147,149,3,28,14,0,148,146,1,0,0,0,
149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,27,1,0,0,0,152,150,1,
0,0,0,153,165,5,35,0,0,154,165,5,36,0,0,155,165,5,34,0,0,156,165,5,37,0,
0,157,165,3,40,20,0,158,159,5,5,0,0,159,160,3,20,10,0,160,161,5,6,0,0,161,
165,1,0,0,0,162,165,3,38,19,0,163,165,3,30,15,0,164,153,1,0,0,0,164,154,
1,0,0,0,164,155,1,0,0,0,164,156,1,0,0,0,164,157,1,0,0,0,164,158,1,0,0,0,
164,162,1,0,0,0,164,163,1,0,0,0,165,29,1,0,0,0,166,167,5,34,0,0,167,169,
5,5,0,0,168,170,3,32,16,0,169,168,1,0,0,0,169,170,1,0,0,0,170,171,1,0,0,
0,171,172,5,6,0,0,172,31,1,0,0,0,173,178,3,20,10,0,174,175,5,7,0,0,175,177,
3,20,10,0,176,174,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,
0,179,33,1,0,0,0,180,178,1,0,0,0,181,185,5,3,0,0,182,184,3,2,1,0,183,182,
1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,188,1,0,0,0,
187,185,1,0,0,0,188,189,5,4,0,0,189,35,1,0,0,0,190,191,5,28,0,0,191,192,
5,5,0,0,192,193,3,20,10,0,193,194,5,6,0,0,194,197,3,34,17,0,195,196,5,29,
0,0,196,198,3,34,17,0,197,195,1,0,0,0,197,198,1,0,0,0,198,37,1,0,0,0,199,
201,5,5,0,0,200,202,3,18,9,0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,
0,0,203,204,5,6,0,0,204,207,5,19,0,0,205,208,3,20,10,0,206,208,3,34,17,0,
207,205,1,0,0,0,207,206,1,0,0,0,208,39,1,0,0,0,209,210,5,34,0,0,210,211,
5,20,0,0,211,212,3,20,10,0,212,213,5,21,0,0,213,41,1,0,0,0,24,45,58,65,72,
78,80,91,98,101,105,110,114,121,129,137,143,150,164,169,178,185,197,201,
207];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesParser extends antlr4.Parser {

    static grammarFileName = "bies.g4";
    static literalNames = [ null, "'='", "';'", "'{'", "'}'", "'('", "')'", 
                            "','", "'+'", "'-'", "'>'", "'<'", "'>='", "'<='", 
                            "'=='", "'!='", "'*'", "'/'", "'**'", "'=>'", 
                            "'['", "']'", "'let'", "'const'", "'var'", "'fun'", 
                            "'true'", "'false'", "'if'", "'else'", "'return'", 
                            "'in'", "'then'", "'print'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "LET", 
                             "CONST", "VAR", "FUN", "TRUE", "FALSE", "IF", 
                             "ELSE", "RETURN", "IN", "THEN", "PRINT", "ID", 
                             "INT", "FLOAT", "STRING", "COMMENT", "WS" ];
    static ruleNames = [ "program", "statement", "letDeclaration", "constDeclaration", 
                         "letInDeclaration", "functionDeclaration", "returnStatement", 
                         "expressionStatement", "printStatement", "parameterList", 
                         "expression", "assignment", "comparison", "term", 
                         "factor", "functionCall", "argumentList", "block", 
                         "ifStatement", "lambdaExpression", "listAccess" ];

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
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1388314656) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 42;
	            this.statement();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
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
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.functionDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.letInDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.letDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 53;
	            this.constDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 54;
	            this.printStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 55;
	            this.expressionStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 56;
	            this.returnStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 57;
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
	        this.state = 60;
	        this.match(biesParser.LET);
	        this.state = 61;
	        this.match(biesParser.ID);
	        this.state = 62;
	        this.match(biesParser.T__0);
	        this.state = 63;
	        this.expression();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 64;
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
	        this.state = 67;
	        this.match(biesParser.CONST);
	        this.state = 68;
	        this.match(biesParser.ID);
	        this.state = 69;
	        this.match(biesParser.T__0);
	        this.state = 70;
	        this.expression();
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 71;
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
	        this.state = 74;
	        this.match(biesParser.LET);
	        this.state = 75;
	        this.match(biesParser.T__2);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22 || _la===23) {
	            this.state = 78;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 23:
	                this.state = 76;
	                this.constDeclaration();
	                break;
	            case 22:
	                this.state = 77;
	                this.letDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 83;
	        this.match(biesParser.T__3);
	        this.state = 84;
	        this.match(biesParser.IN);
	        this.state = 85;
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(biesParser.FUN);
	        this.state = 88;
	        this.match(biesParser.ID);
	        this.state = 89;
	        this.match(biesParser.T__4);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 90;
	            this.parameterList();
	        }

	        this.state = 93;
	        this.match(biesParser.T__5);
	        this.state = 94;
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
	        this.state = 96;
	        this.match(biesParser.RETURN);
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 97;
	            this.expression();

	        }
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 100;
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
	        this.state = 103;
	        this.expression();
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 104;
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
	        this.state = 107;
	        this.match(biesParser.PRINT);
	        this.state = 108;
	        this.match(biesParser.T__4);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 15) !== 0)) {
	            this.state = 109;
	            this.argumentList();
	        }

	        this.state = 112;
	        this.match(biesParser.T__5);
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



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, biesParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(biesParser.ID);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 117;
	            this.match(biesParser.T__6);
	            this.state = 118;
	            this.match(biesParser.ID);
	            this.state = 123;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.assignment();
	        this.state = 129;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 125;
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===9)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 126;
	                this.assignment(); 
	            }
	            this.state = 131;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
	        this.state = 132;
	        this.comparison();
	        this.state = 137;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 133;
	                this.match(biesParser.T__0);
	                this.state = 134;
	                this.comparison(); 
	            }
	            this.state = 139;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
	        this.state = 140;
	        this.term();
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 141;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 64512) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 142;
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
	    this.enterRule(localctx, 26, biesParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.factor();
	        this.state = 150;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 146;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 147;
	                this.factor(); 
	            }
	            this.state = 152;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	    this.enterRule(localctx, 28, biesParser.RULE_factor);
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.match(biesParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.match(biesParser.FLOAT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
	            this.match(biesParser.ID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 156;
	            this.match(biesParser.STRING);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 157;
	            this.listAccess();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 158;
	            this.match(biesParser.T__4);
	            this.state = 159;
	            this.expression();
	            this.state = 160;
	            this.match(biesParser.T__5);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 162;
	            this.lambdaExpression();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 163;
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
	    this.enterRule(localctx, 30, biesParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(biesParser.ID);
	        this.state = 167;
	        this.match(biesParser.T__4);
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 15) !== 0)) {
	            this.state = 168;
	            this.argumentList();
	        }

	        this.state = 171;
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
	    this.enterRule(localctx, 32, biesParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.expression();
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 174;
	            this.match(biesParser.T__6);
	            this.state = 175;
	            this.expression();
	            this.state = 180;
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
	    this.enterRule(localctx, 34, biesParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(biesParser.T__2);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1388314656) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
	            this.state = 182;
	            this.statement();
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 188;
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
	    this.enterRule(localctx, 36, biesParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(biesParser.IF);
	        this.state = 191;
	        this.match(biesParser.T__4);
	        this.state = 192;
	        this.expression();
	        this.state = 193;
	        this.match(biesParser.T__5);
	        this.state = 194;
	        this.block();
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 195;
	            this.match(biesParser.ELSE);
	            this.state = 196;
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



	lambdaExpression() {
	    let localctx = new LambdaExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, biesParser.RULE_lambdaExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(biesParser.T__4);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 200;
	            this.parameterList();
	        }

	        this.state = 203;
	        this.match(biesParser.T__5);
	        this.state = 204;
	        this.match(biesParser.T__18);
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	            this.state = 205;
	            this.expression();
	            break;
	        case 3:
	            this.state = 206;
	            this.block();
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
	    this.enterRule(localctx, 40, biesParser.RULE_listAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(biesParser.ID);
	        this.state = 210;
	        this.match(biesParser.T__19);
	        this.state = 211;
	        this.expression();
	        this.state = 212;
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
biesParser.ELSE = 29;
biesParser.RETURN = 30;
biesParser.IN = 31;
biesParser.THEN = 32;
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
biesParser.RULE_term = 13;
biesParser.RULE_factor = 14;
biesParser.RULE_functionCall = 15;
biesParser.RULE_argumentList = 16;
biesParser.RULE_block = 17;
biesParser.RULE_ifStatement = 18;
biesParser.RULE_lambdaExpression = 19;
biesParser.RULE_listAccess = 20;

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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
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
biesParser.TermContext = TermContext; 
biesParser.FactorContext = FactorContext; 
biesParser.FunctionCallContext = FunctionCallContext; 
biesParser.ArgumentListContext = ArgumentListContext; 
biesParser.BlockContext = BlockContext; 
biesParser.IfStatementContext = IfStatementContext; 
biesParser.LambdaExpressionContext = LambdaExpressionContext; 
biesParser.ListAccessContext = ListAccessContext; 
