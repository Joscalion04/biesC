import biesGrammarVisitor from '../parser/biesVisitor.js';
import biesGrammarParser from '../parser/biesParser.js';


class loader extends biesGrammarVisitor {
    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        return { type: 'LetDeclaration', id, value };
      }
    
      visitExpression(ctx) {
        // Lógica para manejar expresiones aritméticas/lógicas
      }

}

export default loader;