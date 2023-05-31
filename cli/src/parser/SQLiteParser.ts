// Generated from src/parser/SQLiteParser.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import SQLiteParserListener from "./SQLiteParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SQLiteParser extends Parser {
	public static readonly SCOL = 1;
	public static readonly DOT = 2;
	public static readonly OPEN_PAR = 3;
	public static readonly CLOSE_PAR = 4;
	public static readonly COMMA = 5;
	public static readonly ASSIGN = 6;
	public static readonly STAR = 7;
	public static readonly PLUS = 8;
	public static readonly MINUS = 9;
	public static readonly TILDE = 10;
	public static readonly PIPE2 = 11;
	public static readonly DIV = 12;
	public static readonly MOD = 13;
	public static readonly LT2 = 14;
	public static readonly GT2 = 15;
	public static readonly AMP = 16;
	public static readonly PIPE = 17;
	public static readonly LT = 18;
	public static readonly LT_EQ = 19;
	public static readonly GT = 20;
	public static readonly GT_EQ = 21;
	public static readonly EQ = 22;
	public static readonly NOT_EQ1 = 23;
	public static readonly NOT_EQ2 = 24;
	public static readonly ABORT_ = 25;
	public static readonly ACTION_ = 26;
	public static readonly ADD_ = 27;
	public static readonly AFTER_ = 28;
	public static readonly ALL_ = 29;
	public static readonly ALTER_ = 30;
	public static readonly ANALYZE_ = 31;
	public static readonly AND_ = 32;
	public static readonly AS_ = 33;
	public static readonly ASC_ = 34;
	public static readonly ATTACH_ = 35;
	public static readonly AUTOINCREMENT_ = 36;
	public static readonly BEFORE_ = 37;
	public static readonly BEGIN_ = 38;
	public static readonly BETWEEN_ = 39;
	public static readonly BY_ = 40;
	public static readonly CASCADE_ = 41;
	public static readonly CASE_ = 42;
	public static readonly CAST_ = 43;
	public static readonly CHECK_ = 44;
	public static readonly COLLATE_ = 45;
	public static readonly COLUMN_ = 46;
	public static readonly COMMIT_ = 47;
	public static readonly CONFLICT_ = 48;
	public static readonly CONSTRAINT_ = 49;
	public static readonly CREATE_ = 50;
	public static readonly CROSS_ = 51;
	public static readonly CURRENT_DATE_ = 52;
	public static readonly CURRENT_TIME_ = 53;
	public static readonly CURRENT_TIMESTAMP_ = 54;
	public static readonly DATABASE_ = 55;
	public static readonly DEFAULT_ = 56;
	public static readonly DEFERRABLE_ = 57;
	public static readonly DEFERRED_ = 58;
	public static readonly DELETE_ = 59;
	public static readonly DESC_ = 60;
	public static readonly DETACH_ = 61;
	public static readonly DISTINCT_ = 62;
	public static readonly DROP_ = 63;
	public static readonly EACH_ = 64;
	public static readonly ELSE_ = 65;
	public static readonly END_ = 66;
	public static readonly ESCAPE_ = 67;
	public static readonly EXCEPT_ = 68;
	public static readonly EXCLUSIVE_ = 69;
	public static readonly EXISTS_ = 70;
	public static readonly EXPLAIN_ = 71;
	public static readonly FAIL_ = 72;
	public static readonly FOR_ = 73;
	public static readonly FOREIGN_ = 74;
	public static readonly FROM_ = 75;
	public static readonly FULL_ = 76;
	public static readonly GLOB_ = 77;
	public static readonly GROUP_ = 78;
	public static readonly HAVING_ = 79;
	public static readonly IF_ = 80;
	public static readonly IGNORE_ = 81;
	public static readonly IMMEDIATE_ = 82;
	public static readonly IN_ = 83;
	public static readonly INDEX_ = 84;
	public static readonly INDEXED_ = 85;
	public static readonly INITIALLY_ = 86;
	public static readonly INNER_ = 87;
	public static readonly INSERT_ = 88;
	public static readonly INSTEAD_ = 89;
	public static readonly INTERSECT_ = 90;
	public static readonly INTO_ = 91;
	public static readonly IS_ = 92;
	public static readonly ISNULL_ = 93;
	public static readonly JOIN_ = 94;
	public static readonly KEY_ = 95;
	public static readonly LEFT_ = 96;
	public static readonly LIKE_ = 97;
	public static readonly LIMIT_ = 98;
	public static readonly MATCH_ = 99;
	public static readonly NATURAL_ = 100;
	public static readonly NO_ = 101;
	public static readonly NOT_ = 102;
	public static readonly NOTNULL_ = 103;
	public static readonly NULL_ = 104;
	public static readonly OF_ = 105;
	public static readonly OFFSET_ = 106;
	public static readonly ON_ = 107;
	public static readonly OR_ = 108;
	public static readonly ORDER_ = 109;
	public static readonly OUTER_ = 110;
	public static readonly PLAN_ = 111;
	public static readonly PRAGMA_ = 112;
	public static readonly PRIMARY_ = 113;
	public static readonly QUERY_ = 114;
	public static readonly RAISE_ = 115;
	public static readonly RECURSIVE_ = 116;
	public static readonly REFERENCES_ = 117;
	public static readonly REGEXP_ = 118;
	public static readonly REINDEX_ = 119;
	public static readonly RELEASE_ = 120;
	public static readonly RENAME_ = 121;
	public static readonly REPLACE_ = 122;
	public static readonly RESTRICT_ = 123;
	public static readonly RETURNING_ = 124;
	public static readonly RIGHT_ = 125;
	public static readonly ROLLBACK_ = 126;
	public static readonly ROW_ = 127;
	public static readonly ROWS_ = 128;
	public static readonly SAVEPOINT_ = 129;
	public static readonly SELECT_ = 130;
	public static readonly SET_ = 131;
	public static readonly TABLE_ = 132;
	public static readonly TEMP_ = 133;
	public static readonly TEMPORARY_ = 134;
	public static readonly THEN_ = 135;
	public static readonly TO_ = 136;
	public static readonly TRANSACTION_ = 137;
	public static readonly TRIGGER_ = 138;
	public static readonly UNION_ = 139;
	public static readonly UNIQUE_ = 140;
	public static readonly UPDATE_ = 141;
	public static readonly USING_ = 142;
	public static readonly VACUUM_ = 143;
	public static readonly VALUES_ = 144;
	public static readonly VIEW_ = 145;
	public static readonly VIRTUAL_ = 146;
	public static readonly WHEN_ = 147;
	public static readonly WHERE_ = 148;
	public static readonly WITH_ = 149;
	public static readonly WITHOUT_ = 150;
	public static readonly FIRST_VALUE_ = 151;
	public static readonly OVER_ = 152;
	public static readonly PARTITION_ = 153;
	public static readonly RANGE_ = 154;
	public static readonly PRECEDING_ = 155;
	public static readonly UNBOUNDED_ = 156;
	public static readonly CURRENT_ = 157;
	public static readonly FOLLOWING_ = 158;
	public static readonly CUME_DIST_ = 159;
	public static readonly DENSE_RANK_ = 160;
	public static readonly LAG_ = 161;
	public static readonly LAST_VALUE_ = 162;
	public static readonly LEAD_ = 163;
	public static readonly NTH_VALUE_ = 164;
	public static readonly NTILE_ = 165;
	public static readonly PERCENT_RANK_ = 166;
	public static readonly RANK_ = 167;
	public static readonly ROW_NUMBER_ = 168;
	public static readonly GENERATED_ = 169;
	public static readonly ALWAYS_ = 170;
	public static readonly STORED_ = 171;
	public static readonly TRUE_ = 172;
	public static readonly FALSE_ = 173;
	public static readonly WINDOW_ = 174;
	public static readonly NULLS_ = 175;
	public static readonly FIRST_ = 176;
	public static readonly LAST_ = 177;
	public static readonly FILTER_ = 178;
	public static readonly GROUPS_ = 179;
	public static readonly EXCLUDE_ = 180;
	public static readonly TIES_ = 181;
	public static readonly OTHERS_ = 182;
	public static readonly DO_ = 183;
	public static readonly NOTHING_ = 184;
	public static readonly IDENTIFIER = 185;
	public static readonly NUMERIC_LITERAL = 186;
	public static readonly BIND_PARAMETER = 187;
	public static readonly STRING_LITERAL = 188;
	public static readonly BLOB_LITERAL = 189;
	public static readonly SINGLE_LINE_COMMENT = 190;
	public static readonly MULTILINE_COMMENT = 191;
	public static readonly SPACES = 192;
	public static readonly UNEXPECTED_CHAR = 193;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_parse = 0;
	public static readonly RULE_sql_stmt_list = 1;
	public static readonly RULE_sql_stmt = 2;
	public static readonly RULE_indexed_column = 3;
	public static readonly RULE_create_table_stmt = 4;
	public static readonly RULE_column_def = 5;
	public static readonly RULE_type_name = 6;
	public static readonly RULE_column_constraint = 7;
	public static readonly RULE_signed_number = 8;
	public static readonly RULE_table_constraint = 9;
	public static readonly RULE_foreign_key_clause = 10;
	public static readonly RULE_conflict_clause = 11;
	public static readonly RULE_create_view_stmt = 12;
	public static readonly RULE_create_virtual_table_stmt = 13;
	public static readonly RULE_with_clause = 14;
	public static readonly RULE_cte_table_name = 15;
	public static readonly RULE_recursive_cte = 16;
	public static readonly RULE_common_table_expression = 17;
	public static readonly RULE_expr = 18;
	public static readonly RULE_raise_function = 19;
	public static readonly RULE_literal_value = 20;
	public static readonly RULE_value_row = 21;
	public static readonly RULE_values_clause = 22;
	public static readonly RULE_returning_clause = 23;
	public static readonly RULE_select_stmt = 24;
	public static readonly RULE_join_clause = 25;
	public static readonly RULE_select_core = 26;
	public static readonly RULE_table_or_subquery = 27;
	public static readonly RULE_result_column = 28;
	public static readonly RULE_join_operator = 29;
	public static readonly RULE_join_constraint = 30;
	public static readonly RULE_compound_operator = 31;
	public static readonly RULE_column_name_list = 32;
	public static readonly RULE_qualified_table_name = 33;
	public static readonly RULE_filter_clause = 34;
	public static readonly RULE_window_defn = 35;
	public static readonly RULE_over_clause = 36;
	public static readonly RULE_frame_spec = 37;
	public static readonly RULE_frame_clause = 38;
	public static readonly RULE_simple_function_invocation = 39;
	public static readonly RULE_aggregate_function_invocation = 40;
	public static readonly RULE_window_function_invocation = 41;
	public static readonly RULE_common_table_stmt = 42;
	public static readonly RULE_order_by_stmt = 43;
	public static readonly RULE_limit_stmt = 44;
	public static readonly RULE_ordering_term = 45;
	public static readonly RULE_asc_desc = 46;
	public static readonly RULE_frame_left = 47;
	public static readonly RULE_frame_right = 48;
	public static readonly RULE_frame_single = 49;
	public static readonly RULE_window_function = 50;
	public static readonly RULE_offset = 51;
	public static readonly RULE_default_value = 52;
	public static readonly RULE_partition_by = 53;
	public static readonly RULE_order_by_expr = 54;
	public static readonly RULE_order_by_expr_asc_desc = 55;
	public static readonly RULE_expr_asc_desc = 56;
	public static readonly RULE_initial_select = 57;
	public static readonly RULE_recursive_select = 58;
	public static readonly RULE_unary_operator = 59;
	public static readonly RULE_error_message = 60;
	public static readonly RULE_module_argument = 61;
	public static readonly RULE_column_alias = 62;
	public static readonly RULE_keyword = 63;
	public static readonly RULE_name = 64;
	public static readonly RULE_function_name = 65;
	public static readonly RULE_schema_name = 66;
	public static readonly RULE_table_name = 67;
	public static readonly RULE_table_or_index_name = 68;
	public static readonly RULE_column_name = 69;
	public static readonly RULE_collation_name = 70;
	public static readonly RULE_foreign_table = 71;
	public static readonly RULE_index_name = 72;
	public static readonly RULE_trigger_name = 73;
	public static readonly RULE_view_name = 74;
	public static readonly RULE_module_name = 75;
	public static readonly RULE_pragma_name = 76;
	public static readonly RULE_savepoint_name = 77;
	public static readonly RULE_table_alias = 78;
	public static readonly RULE_transaction_name = 79;
	public static readonly RULE_window_name = 80;
	public static readonly RULE_alias = 81;
	public static readonly RULE_filename = 82;
	public static readonly RULE_base_window_name = 83;
	public static readonly RULE_simple_func = 84;
	public static readonly RULE_aggregate_func = 85;
	public static readonly RULE_table_function_name = 86;
	public static readonly RULE_any_name = 87;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'.'", "'('", 
                                                            "')'", "','", 
                                                            "'='", "'*'", 
                                                            "'+'", "'-'", 
                                                            "'~'", "'||'", 
                                                            "'/'", "'%'", 
                                                            "'<<'", "'>>'", 
                                                            "'&'", "'|'", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'=='", "'!='", 
                                                            "'<>'", "'ABORT'", 
                                                            "'ACTION'", 
                                                            "'ADD'", "'AFTER'", 
                                                            "'ALL'", "'ALTER'", 
                                                            "'ANALYZE'", 
                                                            "'AND'", "'AS'", 
                                                            "'ASC'", "'ATTACH'", 
                                                            "'AUTOINCREMENT'", 
                                                            "'BEFORE'", 
                                                            "'BEGIN'", "'BETWEEN'", 
                                                            "'BY'", "'CASCADE'", 
                                                            "'CASE'", "'CAST'", 
                                                            "'CHECK'", "'COLLATE'", 
                                                            "'COLUMN'", 
                                                            "'COMMIT'", 
                                                            "'CONFLICT'", 
                                                            "'CONSTRAINT'", 
                                                            "'CREATE'", 
                                                            "'CROSS'", "'CURRENT_DATE'", 
                                                            "'CURRENT_TIME'", 
                                                            "'CURRENT_TIMESTAMP'", 
                                                            "'DATABASE'", 
                                                            "'DEFAULT'", 
                                                            "'DEFERRABLE'", 
                                                            "'DEFERRED'", 
                                                            "'DELETE'", 
                                                            "'DESC'", "'DETACH'", 
                                                            "'DISTINCT'", 
                                                            "'DROP'", "'EACH'", 
                                                            "'ELSE'", "'END'", 
                                                            "'ESCAPE'", 
                                                            "'EXCEPT'", 
                                                            "'EXCLUSIVE'", 
                                                            "'EXISTS'", 
                                                            "'EXPLAIN'", 
                                                            "'FAIL'", "'FOR'", 
                                                            "'FOREIGN'", 
                                                            "'FROM'", "'FULL'", 
                                                            "'GLOB'", "'GROUP'", 
                                                            "'HAVING'", 
                                                            "'IF'", "'IGNORE'", 
                                                            "'IMMEDIATE'", 
                                                            "'IN'", "'INDEX'", 
                                                            "'INDEXED'", 
                                                            "'INITIALLY'", 
                                                            "'INNER'", "'INSERT'", 
                                                            "'INSTEAD'", 
                                                            "'INTERSECT'", 
                                                            "'INTO'", "'IS'", 
                                                            "'ISNULL'", 
                                                            "'JOIN'", "'KEY'", 
                                                            "'LEFT'", "'LIKE'", 
                                                            "'LIMIT'", "'MATCH'", 
                                                            "'NATURAL'", 
                                                            "'NO'", "'NOT'", 
                                                            "'NOTNULL'", 
                                                            "'NULL'", "'OF'", 
                                                            "'OFFSET'", 
                                                            "'ON'", "'OR'", 
                                                            "'ORDER'", "'OUTER'", 
                                                            "'PLAN'", "'PRAGMA'", 
                                                            "'PRIMARY'", 
                                                            "'QUERY'", "'RAISE'", 
                                                            "'RECURSIVE'", 
                                                            "'REFERENCES'", 
                                                            "'REGEXP'", 
                                                            "'REINDEX'", 
                                                            "'RELEASE'", 
                                                            "'RENAME'", 
                                                            "'REPLACE'", 
                                                            "'RESTRICT'", 
                                                            "'RETURNING'", 
                                                            "'RIGHT'", "'ROLLBACK'", 
                                                            "'ROW'", "'ROWS'", 
                                                            "'SAVEPOINT'", 
                                                            "'SELECT'", 
                                                            "'SET'", "'TABLE'", 
                                                            "'TEMP'", "'TEMPORARY'", 
                                                            "'THEN'", "'TO'", 
                                                            "'TRANSACTION'", 
                                                            "'TRIGGER'", 
                                                            "'UNION'", "'UNIQUE'", 
                                                            "'UPDATE'", 
                                                            "'USING'", "'VACUUM'", 
                                                            "'VALUES'", 
                                                            "'VIEW'", "'VIRTUAL'", 
                                                            "'WHEN'", "'WHERE'", 
                                                            "'WITH'", "'WITHOUT'", 
                                                            "'FIRST_VALUE'", 
                                                            "'OVER'", "'PARTITION'", 
                                                            "'RANGE'", "'PRECEDING'", 
                                                            "'UNBOUNDED'", 
                                                            "'CURRENT'", 
                                                            "'FOLLOWING'", 
                                                            "'CUME_DIST'", 
                                                            "'DENSE_RANK'", 
                                                            "'LAG'", "'LAST_VALUE'", 
                                                            "'LEAD'", "'NTH_VALUE'", 
                                                            "'NTILE'", "'PERCENT_RANK'", 
                                                            "'RANK'", "'ROW_NUMBER'", 
                                                            "'GENERATED'", 
                                                            "'ALWAYS'", 
                                                            "'STORED'", 
                                                            "'TRUE'", "'FALSE'", 
                                                            "'WINDOW'", 
                                                            "'NULLS'", "'FIRST'", 
                                                            "'LAST'", "'FILTER'", 
                                                            "'GROUPS'", 
                                                            "'EXCLUDE'", 
                                                            "'TIES'", "'OTHERS'", 
                                                            "'DO'", "'NOTHING'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SCOL", 
                                                             "DOT", "OPEN_PAR", 
                                                             "CLOSE_PAR", 
                                                             "COMMA", "ASSIGN", 
                                                             "STAR", "PLUS", 
                                                             "MINUS", "TILDE", 
                                                             "PIPE2", "DIV", 
                                                             "MOD", "LT2", 
                                                             "GT2", "AMP", 
                                                             "PIPE", "LT", 
                                                             "LT_EQ", "GT", 
                                                             "GT_EQ", "EQ", 
                                                             "NOT_EQ1", 
                                                             "NOT_EQ2", 
                                                             "ABORT_", "ACTION_", 
                                                             "ADD_", "AFTER_", 
                                                             "ALL_", "ALTER_", 
                                                             "ANALYZE_", 
                                                             "AND_", "AS_", 
                                                             "ASC_", "ATTACH_", 
                                                             "AUTOINCREMENT_", 
                                                             "BEFORE_", 
                                                             "BEGIN_", "BETWEEN_", 
                                                             "BY_", "CASCADE_", 
                                                             "CASE_", "CAST_", 
                                                             "CHECK_", "COLLATE_", 
                                                             "COLUMN_", 
                                                             "COMMIT_", 
                                                             "CONFLICT_", 
                                                             "CONSTRAINT_", 
                                                             "CREATE_", 
                                                             "CROSS_", "CURRENT_DATE_", 
                                                             "CURRENT_TIME_", 
                                                             "CURRENT_TIMESTAMP_", 
                                                             "DATABASE_", 
                                                             "DEFAULT_", 
                                                             "DEFERRABLE_", 
                                                             "DEFERRED_", 
                                                             "DELETE_", 
                                                             "DESC_", "DETACH_", 
                                                             "DISTINCT_", 
                                                             "DROP_", "EACH_", 
                                                             "ELSE_", "END_", 
                                                             "ESCAPE_", 
                                                             "EXCEPT_", 
                                                             "EXCLUSIVE_", 
                                                             "EXISTS_", 
                                                             "EXPLAIN_", 
                                                             "FAIL_", "FOR_", 
                                                             "FOREIGN_", 
                                                             "FROM_", "FULL_", 
                                                             "GLOB_", "GROUP_", 
                                                             "HAVING_", 
                                                             "IF_", "IGNORE_", 
                                                             "IMMEDIATE_", 
                                                             "IN_", "INDEX_", 
                                                             "INDEXED_", 
                                                             "INITIALLY_", 
                                                             "INNER_", "INSERT_", 
                                                             "INSTEAD_", 
                                                             "INTERSECT_", 
                                                             "INTO_", "IS_", 
                                                             "ISNULL_", 
                                                             "JOIN_", "KEY_", 
                                                             "LEFT_", "LIKE_", 
                                                             "LIMIT_", "MATCH_", 
                                                             "NATURAL_", 
                                                             "NO_", "NOT_", 
                                                             "NOTNULL_", 
                                                             "NULL_", "OF_", 
                                                             "OFFSET_", 
                                                             "ON_", "OR_", 
                                                             "ORDER_", "OUTER_", 
                                                             "PLAN_", "PRAGMA_", 
                                                             "PRIMARY_", 
                                                             "QUERY_", "RAISE_", 
                                                             "RECURSIVE_", 
                                                             "REFERENCES_", 
                                                             "REGEXP_", 
                                                             "REINDEX_", 
                                                             "RELEASE_", 
                                                             "RENAME_", 
                                                             "REPLACE_", 
                                                             "RESTRICT_", 
                                                             "RETURNING_", 
                                                             "RIGHT_", "ROLLBACK_", 
                                                             "ROW_", "ROWS_", 
                                                             "SAVEPOINT_", 
                                                             "SELECT_", 
                                                             "SET_", "TABLE_", 
                                                             "TEMP_", "TEMPORARY_", 
                                                             "THEN_", "TO_", 
                                                             "TRANSACTION_", 
                                                             "TRIGGER_", 
                                                             "UNION_", "UNIQUE_", 
                                                             "UPDATE_", 
                                                             "USING_", "VACUUM_", 
                                                             "VALUES_", 
                                                             "VIEW_", "VIRTUAL_", 
                                                             "WHEN_", "WHERE_", 
                                                             "WITH_", "WITHOUT_", 
                                                             "FIRST_VALUE_", 
                                                             "OVER_", "PARTITION_", 
                                                             "RANGE_", "PRECEDING_", 
                                                             "UNBOUNDED_", 
                                                             "CURRENT_", 
                                                             "FOLLOWING_", 
                                                             "CUME_DIST_", 
                                                             "DENSE_RANK_", 
                                                             "LAG_", "LAST_VALUE_", 
                                                             "LEAD_", "NTH_VALUE_", 
                                                             "NTILE_", "PERCENT_RANK_", 
                                                             "RANK_", "ROW_NUMBER_", 
                                                             "GENERATED_", 
                                                             "ALWAYS_", 
                                                             "STORED_", 
                                                             "TRUE_", "FALSE_", 
                                                             "WINDOW_", 
                                                             "NULLS_", "FIRST_", 
                                                             "LAST_", "FILTER_", 
                                                             "GROUPS_", 
                                                             "EXCLUDE_", 
                                                             "TIES_", "OTHERS_", 
                                                             "DO_", "NOTHING_", 
                                                             "IDENTIFIER", 
                                                             "NUMERIC_LITERAL", 
                                                             "BIND_PARAMETER", 
                                                             "STRING_LITERAL", 
                                                             "BLOB_LITERAL", 
                                                             "SINGLE_LINE_COMMENT", 
                                                             "MULTILINE_COMMENT", 
                                                             "SPACES", "UNEXPECTED_CHAR" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "sql_stmt_list", "sql_stmt", "indexed_column", "create_table_stmt", 
		"column_def", "type_name", "column_constraint", "signed_number", "table_constraint", 
		"foreign_key_clause", "conflict_clause", "create_view_stmt", "create_virtual_table_stmt", 
		"with_clause", "cte_table_name", "recursive_cte", "common_table_expression", 
		"expr", "raise_function", "literal_value", "value_row", "values_clause", 
		"returning_clause", "select_stmt", "join_clause", "select_core", "table_or_subquery", 
		"result_column", "join_operator", "join_constraint", "compound_operator", 
		"column_name_list", "qualified_table_name", "filter_clause", "window_defn", 
		"over_clause", "frame_spec", "frame_clause", "simple_function_invocation", 
		"aggregate_function_invocation", "window_function_invocation", "common_table_stmt", 
		"order_by_stmt", "limit_stmt", "ordering_term", "asc_desc", "frame_left", 
		"frame_right", "frame_single", "window_function", "offset", "default_value", 
		"partition_by", "order_by_expr", "order_by_expr_asc_desc", "expr_asc_desc", 
		"initial_select", "recursive_select", "unary_operator", "error_message", 
		"module_argument", "column_alias", "keyword", "name", "function_name", 
		"schema_name", "table_name", "table_or_index_name", "column_name", "collation_name", 
		"foreign_table", "index_name", "trigger_name", "view_name", "module_name", 
		"pragma_name", "savepoint_name", "table_alias", "transaction_name", "window_name", 
		"alias", "filename", "base_window_name", "simple_func", "aggregate_func", 
		"table_function_name", "any_name",
	];
	public get grammarFileName(): string { return "SQLiteParser.g4"; }
	public get literalNames(): (string | null)[] { return SQLiteParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SQLiteParser.symbolicNames; }
	public get ruleNames(): string[] { return SQLiteParser.ruleNames; }
	public get serializedATN(): number[] { return SQLiteParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SQLiteParser._ATN, SQLiteParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let localctx: ParseContext = new ParseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SQLiteParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===50 || _la===71) {
				{
				{
				this.state = 176;
				this.sql_stmt_list();
				}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 182;
			this.match(SQLiteParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sql_stmt_list(): Sql_stmt_listContext {
		let localctx: Sql_stmt_listContext = new Sql_stmt_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SQLiteParser.RULE_sql_stmt_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 184;
				this.match(SQLiteParser.SCOL);
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 190;
			this.sql_stmt();
			this.state = 199;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 191;
						this.match(SQLiteParser.SCOL);
						}
						}
						this.state = 194;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===1);
					this.state = 196;
					this.sql_stmt();
					}
					}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 202;
					this.match(SQLiteParser.SCOL);
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sql_stmt(): Sql_stmtContext {
		let localctx: Sql_stmtContext = new Sql_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SQLiteParser.RULE_sql_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===71) {
				{
				this.state = 208;
				this.match(SQLiteParser.EXPLAIN_);
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===114) {
					{
					this.state = 209;
					this.match(SQLiteParser.QUERY_);
					this.state = 210;
					this.match(SQLiteParser.PLAN_);
					}
				}

				}
			}

			this.state = 218;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 215;
				this.create_table_stmt();
				}
				break;
			case 2:
				{
				this.state = 216;
				this.create_view_stmt();
				}
				break;
			case 3:
				{
				this.state = 217;
				this.create_virtual_table_stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexed_column(): Indexed_columnContext {
		let localctx: Indexed_columnContext = new Indexed_columnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SQLiteParser.RULE_indexed_column);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 220;
				this.column_name();
				}
				break;
			case 2:
				{
				this.state = 221;
				this.expr(0);
				}
				break;
			}
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 224;
				this.match(SQLiteParser.COLLATE_);
				this.state = 225;
				this.collation_name();
				}
			}

			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34 || _la===60) {
				{
				this.state = 228;
				this.asc_desc();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_table_stmt(): Create_table_stmtContext {
		let localctx: Create_table_stmtContext = new Create_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SQLiteParser.RULE_create_table_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this.match(SQLiteParser.CREATE_);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133 || _la===134) {
				{
				this.state = 232;
				_la = this._input.LA(1);
				if(!(_la===133 || _la===134)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 235;
			this.match(SQLiteParser.TABLE_);
			this.state = 239;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 236;
				this.match(SQLiteParser.IF_);
				this.state = 237;
				this.match(SQLiteParser.NOT_);
				this.state = 238;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 241;
				this.schema_name();
				this.state = 242;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 246;
			this.table_name();
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				{
				this.state = 247;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 248;
				this.column_def();
				this.state = 253;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 249;
						this.match(SQLiteParser.COMMA);
						this.state = 250;
						this.column_def();
						}
						}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 256;
					this.match(SQLiteParser.COMMA);
					this.state = 257;
					this.table_constraint();
					}
					}
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 263;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150) {
					{
					this.state = 264;
					this.match(SQLiteParser.WITHOUT_);
					this.state = 265;
					localctx._row_ROW_ID = this.match(SQLiteParser.IDENTIFIER);
					}
				}

				}
				break;
			case 33:
				{
				this.state = 268;
				this.match(SQLiteParser.AS_);
				this.state = 269;
				this.select_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_def(): Column_defContext {
		let localctx: Column_defContext = new Column_defContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SQLiteParser.RULE_column_def);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
			this.column_name();
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 273;
				this.type_name();
				}
				break;
			}
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8460289) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 34821) !== 0) || _la===140 || _la===169) {
				{
				{
				this.state = 276;
				this.column_constraint();
				}
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_name(): Type_nameContext {
		let localctx: Type_nameContext = new Type_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SQLiteParser.RULE_type_name);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 283;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 282;
					this.name();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 285;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 287;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 288;
				this.signed_number();
				this.state = 289;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 2:
				{
				this.state = 291;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 292;
				this.signed_number();
				this.state = 293;
				this.match(SQLiteParser.COMMA);
				this.state = 294;
				this.signed_number();
				this.state = 295;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_constraint(): Column_constraintContext {
		let localctx: Column_constraintContext = new Column_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SQLiteParser.RULE_column_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 299;
				this.match(SQLiteParser.CONSTRAINT_);
				this.state = 300;
				this.name();
				}
			}

			this.state = 352;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
				{
				{
				this.state = 303;
				this.match(SQLiteParser.PRIMARY_);
				this.state = 304;
				this.match(SQLiteParser.KEY_);
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===34 || _la===60) {
					{
					this.state = 305;
					this.asc_desc();
					}
				}

				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 308;
					this.conflict_clause();
					}
				}

				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 311;
					this.match(SQLiteParser.AUTOINCREMENT_);
					}
				}

				}
				}
				break;
			case 102:
			case 104:
			case 140:
				{
				this.state = 319;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 102:
				case 104:
					{
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===102) {
						{
						this.state = 314;
						this.match(SQLiteParser.NOT_);
						}
					}

					this.state = 317;
					this.match(SQLiteParser.NULL_);
					}
					break;
				case 140:
					{
					this.state = 318;
					this.match(SQLiteParser.UNIQUE_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 321;
					this.conflict_clause();
					}
				}

				}
				break;
			case 44:
				{
				this.state = 324;
				this.match(SQLiteParser.CHECK_);
				this.state = 325;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 326;
				this.expr(0);
				this.state = 327;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 56:
				{
				this.state = 329;
				this.match(SQLiteParser.DEFAULT_);
				this.state = 336;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 330;
					this.signed_number();
					}
					break;
				case 2:
					{
					this.state = 331;
					this.literal_value();
					}
					break;
				case 3:
					{
					this.state = 332;
					this.match(SQLiteParser.OPEN_PAR);
					this.state = 333;
					this.expr(0);
					this.state = 334;
					this.match(SQLiteParser.CLOSE_PAR);
					}
					break;
				}
				}
				break;
			case 45:
				{
				this.state = 338;
				this.match(SQLiteParser.COLLATE_);
				this.state = 339;
				this.collation_name();
				}
				break;
			case 117:
				{
				this.state = 340;
				this.foreign_key_clause();
				}
				break;
			case 33:
			case 169:
				{
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===169) {
					{
					this.state = 341;
					this.match(SQLiteParser.GENERATED_);
					this.state = 342;
					this.match(SQLiteParser.ALWAYS_);
					}
				}

				this.state = 345;
				this.match(SQLiteParser.AS_);
				this.state = 346;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 347;
				this.expr(0);
				this.state = 348;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146 || _la===171) {
					{
					this.state = 349;
					_la = this._input.LA(1);
					if(!(_la===146 || _la===171)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signed_number(): Signed_numberContext {
		let localctx: Signed_numberContext = new Signed_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SQLiteParser.RULE_signed_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===9) {
				{
				this.state = 354;
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 357;
			this.match(SQLiteParser.NUMERIC_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_constraint(): Table_constraintContext {
		let localctx: Table_constraintContext = new Table_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SQLiteParser.RULE_table_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 359;
				this.match(SQLiteParser.CONSTRAINT_);
				this.state = 360;
				this.name();
				}
			}

			this.state = 400;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
			case 140:
				{
				this.state = 366;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 113:
					{
					this.state = 363;
					this.match(SQLiteParser.PRIMARY_);
					this.state = 364;
					this.match(SQLiteParser.KEY_);
					}
					break;
				case 140:
					{
					this.state = 365;
					this.match(SQLiteParser.UNIQUE_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 368;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 369;
				this.indexed_column();
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 370;
					this.match(SQLiteParser.COMMA);
					this.state = 371;
					this.indexed_column();
					}
					}
					this.state = 376;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 377;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 378;
					this.conflict_clause();
					}
				}

				}
				break;
			case 44:
				{
				this.state = 381;
				this.match(SQLiteParser.CHECK_);
				this.state = 382;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 383;
				this.expr(0);
				this.state = 384;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 74:
				{
				this.state = 386;
				this.match(SQLiteParser.FOREIGN_);
				this.state = 387;
				this.match(SQLiteParser.KEY_);
				this.state = 388;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 389;
				this.column_name();
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 390;
					this.match(SQLiteParser.COMMA);
					this.state = 391;
					this.column_name();
					}
					}
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 397;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 398;
				this.foreign_key_clause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public foreign_key_clause(): Foreign_key_clauseContext {
		let localctx: Foreign_key_clauseContext = new Foreign_key_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SQLiteParser.RULE_foreign_key_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 402;
			this.match(SQLiteParser.REFERENCES_);
			this.state = 403;
			this.foreign_table();
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 404;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 405;
				this.column_name();
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 406;
					this.match(SQLiteParser.COMMA);
					this.state = 407;
					this.column_name();
					}
					}
					this.state = 412;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 413;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99 || _la===107) {
				{
				this.state = 429;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 107:
					{
					this.state = 417;
					this.match(SQLiteParser.ON_);
					this.state = 418;
					_la = this._input.LA(1);
					if(!(_la===59 || _la===141)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 425;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 131:
						{
						this.state = 419;
						this.match(SQLiteParser.SET_);
						this.state = 420;
						_la = this._input.LA(1);
						if(!(_la===56 || _la===104)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						break;
					case 41:
						{
						this.state = 421;
						this.match(SQLiteParser.CASCADE_);
						}
						break;
					case 123:
						{
						this.state = 422;
						this.match(SQLiteParser.RESTRICT_);
						}
						break;
					case 101:
						{
						this.state = 423;
						this.match(SQLiteParser.NO_);
						this.state = 424;
						this.match(SQLiteParser.ACTION_);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case 99:
					{
					this.state = 427;
					this.match(SQLiteParser.MATCH_);
					this.state = 428;
					this.name();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 442;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 434;
					this.match(SQLiteParser.NOT_);
					}
				}

				this.state = 437;
				this.match(SQLiteParser.DEFERRABLE_);
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===86) {
					{
					this.state = 438;
					this.match(SQLiteParser.INITIALLY_);
					this.state = 439;
					_la = this._input.LA(1);
					if(!(_la===58 || _la===82)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conflict_clause(): Conflict_clauseContext {
		let localctx: Conflict_clauseContext = new Conflict_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SQLiteParser.RULE_conflict_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 444;
			this.match(SQLiteParser.ON_);
			this.state = 445;
			this.match(SQLiteParser.CONFLICT_);
			this.state = 446;
			_la = this._input.LA(1);
			if(!(_la===25 || _la===72 || _la===81 || _la===122 || _la===126)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_view_stmt(): Create_view_stmtContext {
		let localctx: Create_view_stmtContext = new Create_view_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SQLiteParser.RULE_create_view_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			this.match(SQLiteParser.CREATE_);
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133 || _la===134) {
				{
				this.state = 449;
				_la = this._input.LA(1);
				if(!(_la===133 || _la===134)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 452;
			this.match(SQLiteParser.VIEW_);
			this.state = 456;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 453;
				this.match(SQLiteParser.IF_);
				this.state = 454;
				this.match(SQLiteParser.NOT_);
				this.state = 455;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 458;
				this.schema_name();
				this.state = 459;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 463;
			this.view_name();
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 464;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 465;
				this.column_name();
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 466;
					this.match(SQLiteParser.COMMA);
					this.state = 467;
					this.column_name();
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 473;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 477;
			this.match(SQLiteParser.AS_);
			this.state = 478;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_virtual_table_stmt(): Create_virtual_table_stmtContext {
		let localctx: Create_virtual_table_stmtContext = new Create_virtual_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SQLiteParser.RULE_create_virtual_table_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 480;
			this.match(SQLiteParser.CREATE_);
			this.state = 481;
			this.match(SQLiteParser.VIRTUAL_);
			this.state = 482;
			this.match(SQLiteParser.TABLE_);
			this.state = 486;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 483;
				this.match(SQLiteParser.IF_);
				this.state = 484;
				this.match(SQLiteParser.NOT_);
				this.state = 485;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 488;
				this.schema_name();
				this.state = 489;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 493;
			this.table_name();
			this.state = 494;
			this.match(SQLiteParser.USING_);
			this.state = 495;
			this.module_name();
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 496;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 497;
				this.module_argument();
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 498;
					this.match(SQLiteParser.COMMA);
					this.state = 499;
					this.module_argument();
					}
					}
					this.state = 504;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 505;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public with_clause(): With_clauseContext {
		let localctx: With_clauseContext = new With_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SQLiteParser.RULE_with_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
			this.match(SQLiteParser.WITH_);
			this.state = 511;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 510;
				this.match(SQLiteParser.RECURSIVE_);
				}
				break;
			}
			this.state = 513;
			this.cte_table_name();
			this.state = 514;
			this.match(SQLiteParser.AS_);
			this.state = 515;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 516;
			this.select_stmt();
			this.state = 517;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 518;
				this.match(SQLiteParser.COMMA);
				this.state = 519;
				this.cte_table_name();
				this.state = 520;
				this.match(SQLiteParser.AS_);
				this.state = 521;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 522;
				this.select_stmt();
				this.state = 523;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				}
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cte_table_name(): Cte_table_nameContext {
		let localctx: Cte_table_nameContext = new Cte_table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SQLiteParser.RULE_cte_table_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 530;
			this.table_name();
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 531;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 532;
				this.column_name();
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 533;
					this.match(SQLiteParser.COMMA);
					this.state = 534;
					this.column_name();
					}
					}
					this.state = 539;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 540;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recursive_cte(): Recursive_cteContext {
		let localctx: Recursive_cteContext = new Recursive_cteContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SQLiteParser.RULE_recursive_cte);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 544;
			this.cte_table_name();
			this.state = 545;
			this.match(SQLiteParser.AS_);
			this.state = 546;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 547;
			this.initial_select();
			this.state = 548;
			this.match(SQLiteParser.UNION_);
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 549;
				this.match(SQLiteParser.ALL_);
				}
			}

			this.state = 552;
			this.recursive_select();
			this.state = 553;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public common_table_expression(): Common_table_expressionContext {
		let localctx: Common_table_expressionContext = new Common_table_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SQLiteParser.RULE_common_table_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 555;
			this.table_name();
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 556;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 557;
				this.column_name();
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 558;
					this.match(SQLiteParser.COMMA);
					this.state = 559;
					this.column_name();
					}
					}
					this.state = 564;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 565;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 569;
			this.match(SQLiteParser.AS_);
			this.state = 570;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 571;
			this.select_stmt();
			this.state = 572;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 36;
		this.enterRecursionRule(localctx, 36, SQLiteParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 662;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 575;
				this.literal_value();
				}
				break;
			case 2:
				{
				this.state = 576;
				this.match(SQLiteParser.BIND_PARAMETER);
				}
				break;
			case 3:
				{
				this.state = 585;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 580;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
					case 1:
						{
						this.state = 577;
						this.schema_name();
						this.state = 578;
						this.match(SQLiteParser.DOT);
						}
						break;
					}
					this.state = 582;
					this.table_name();
					this.state = 583;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 587;
				this.column_name();
				}
				break;
			case 4:
				{
				this.state = 588;
				this.unary_operator();
				this.state = 589;
				this.expr(21);
				}
				break;
			case 5:
				{
				this.state = 591;
				this.function_name();
				this.state = 592;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 605;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
				case 8:
				case 9:
				case 10:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
					{
					{
					this.state = 594;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
					case 1:
						{
						this.state = 593;
						this.match(SQLiteParser.DISTINCT_);
						}
						break;
					}
					this.state = 596;
					this.expr(0);
					this.state = 601;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 597;
						this.match(SQLiteParser.COMMA);
						this.state = 598;
						this.expr(0);
						}
						}
						this.state = 603;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				case 7:
					{
					this.state = 604;
					this.match(SQLiteParser.STAR);
					}
					break;
				case 4:
					break;
				default:
					break;
				}
				this.state = 607;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 609;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 608;
					this.filter_clause();
					}
					break;
				}
				this.state = 612;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 611;
					this.over_clause();
					}
					break;
				}
				}
				break;
			case 6:
				{
				this.state = 614;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 615;
				this.expr(0);
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 616;
					this.match(SQLiteParser.COMMA);
					this.state = 617;
					this.expr(0);
					}
					}
					this.state = 622;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 623;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 7:
				{
				this.state = 625;
				this.match(SQLiteParser.CAST_);
				this.state = 626;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 627;
				this.expr(0);
				this.state = 628;
				this.match(SQLiteParser.AS_);
				this.state = 629;
				this.type_name();
				this.state = 630;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 8:
				{
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70 || _la===102) {
					{
					this.state = 633;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===102) {
						{
						this.state = 632;
						this.match(SQLiteParser.NOT_);
						}
					}

					this.state = 635;
					this.match(SQLiteParser.EXISTS_);
					}
				}

				this.state = 638;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 639;
				this.select_stmt();
				this.state = 640;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 9:
				{
				this.state = 642;
				this.match(SQLiteParser.CASE_);
				this.state = 644;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 643;
					this.expr(0);
					}
					break;
				}
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 646;
					this.match(SQLiteParser.WHEN_);
					this.state = 647;
					this.expr(0);
					this.state = 648;
					this.match(SQLiteParser.THEN_);
					this.state = 649;
					this.expr(0);
					}
					}
					this.state = 653;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===147);
				this.state = 657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===65) {
					{
					this.state = 655;
					this.match(SQLiteParser.ELSE_);
					this.state = 656;
					this.expr(0);
					}
				}

				this.state = 659;
				this.match(SQLiteParser.END_);
				}
				break;
			case 10:
				{
				this.state = 661;
				this.raise_function();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 783;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 781;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 664;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 665;
						this.match(SQLiteParser.PIPE2);
						this.state = 666;
						this.expr(21);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 667;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 668;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 12416) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 669;
						this.expr(20);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 670;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 671;
						_la = this._input.LA(1);
						if(!(_la===8 || _la===9)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 672;
						this.expr(19);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 673;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 674;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 675;
						this.expr(18);
						}
						break;
					case 5:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 676;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 677;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 678;
						this.expr(17);
						}
						break;
					case 6:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 679;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 692;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
						case 1:
							{
							this.state = 680;
							this.match(SQLiteParser.ASSIGN);
							}
							break;
						case 2:
							{
							this.state = 681;
							this.match(SQLiteParser.EQ);
							}
							break;
						case 3:
							{
							this.state = 682;
							this.match(SQLiteParser.NOT_EQ1);
							}
							break;
						case 4:
							{
							this.state = 683;
							this.match(SQLiteParser.NOT_EQ2);
							}
							break;
						case 5:
							{
							this.state = 684;
							this.match(SQLiteParser.IS_);
							}
							break;
						case 6:
							{
							this.state = 685;
							this.match(SQLiteParser.IS_);
							this.state = 686;
							this.match(SQLiteParser.NOT_);
							}
							break;
						case 7:
							{
							this.state = 687;
							this.match(SQLiteParser.IN_);
							}
							break;
						case 8:
							{
							this.state = 688;
							this.match(SQLiteParser.LIKE_);
							}
							break;
						case 9:
							{
							this.state = 689;
							this.match(SQLiteParser.GLOB_);
							}
							break;
						case 10:
							{
							this.state = 690;
							this.match(SQLiteParser.MATCH_);
							}
							break;
						case 11:
							{
							this.state = 691;
							this.match(SQLiteParser.REGEXP_);
							}
							break;
						}
						this.state = 694;
						this.expr(16);
						}
						break;
					case 7:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 695;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 696;
						this.match(SQLiteParser.AND_);
						this.state = 697;
						this.expr(15);
						}
						break;
					case 8:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 698;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 699;
						this.match(SQLiteParser.OR_);
						this.state = 700;
						this.expr(14);
						}
						break;
					case 9:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 701;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 702;
						this.match(SQLiteParser.IS_);
						this.state = 704;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
						case 1:
							{
							this.state = 703;
							this.match(SQLiteParser.NOT_);
							}
							break;
						}
						this.state = 706;
						this.expr(7);
						}
						break;
					case 10:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 707;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 709;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===102) {
							{
							this.state = 708;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 711;
						this.match(SQLiteParser.BETWEEN_);
						this.state = 712;
						this.expr(0);
						this.state = 713;
						this.match(SQLiteParser.AND_);
						this.state = 714;
						this.expr(6);
						}
						break;
					case 11:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 716;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 717;
						this.match(SQLiteParser.COLLATE_);
						this.state = 718;
						this.collation_name();
						}
						break;
					case 12:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 719;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 721;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===102) {
							{
							this.state = 720;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 723;
						_la = this._input.LA(1);
						if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 5242881) !== 0) || _la===118)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 724;
						this.expr(0);
						this.state = 727;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
						case 1:
							{
							this.state = 725;
							this.match(SQLiteParser.ESCAPE_);
							this.state = 726;
							this.expr(0);
							}
							break;
						}
						}
						break;
					case 13:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 729;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 734;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 93:
							{
							this.state = 730;
							this.match(SQLiteParser.ISNULL_);
							}
							break;
						case 103:
							{
							this.state = 731;
							this.match(SQLiteParser.NOTNULL_);
							}
							break;
						case 102:
							{
							this.state = 732;
							this.match(SQLiteParser.NOT_);
							this.state = 733;
							this.match(SQLiteParser.NULL_);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					case 14:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 736;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 738;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===102) {
							{
							this.state = 737;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 740;
						this.match(SQLiteParser.IN_);
						this.state = 779;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
						case 1:
							{
							this.state = 741;
							this.match(SQLiteParser.OPEN_PAR);
							this.state = 751;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
							case 1:
								{
								this.state = 742;
								this.select_stmt();
								}
								break;
							case 2:
								{
								this.state = 743;
								this.expr(0);
								this.state = 748;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la===5) {
									{
									{
									this.state = 744;
									this.match(SQLiteParser.COMMA);
									this.state = 745;
									this.expr(0);
									}
									}
									this.state = 750;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
								break;
							}
							this.state = 753;
							this.match(SQLiteParser.CLOSE_PAR);
							}
							break;
						case 2:
							{
							this.state = 757;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
							case 1:
								{
								this.state = 754;
								this.schema_name();
								this.state = 755;
								this.match(SQLiteParser.DOT);
								}
								break;
							}
							this.state = 759;
							this.table_name();
							}
							break;
						case 3:
							{
							this.state = 763;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
							case 1:
								{
								this.state = 760;
								this.schema_name();
								this.state = 761;
								this.match(SQLiteParser.DOT);
								}
								break;
							}
							this.state = 765;
							this.table_function_name();
							this.state = 766;
							this.match(SQLiteParser.OPEN_PAR);
							this.state = 775;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261414664) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4026531839) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 1042284543) !== 0)) {
								{
								this.state = 767;
								this.expr(0);
								this.state = 772;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la===5) {
									{
									{
									this.state = 768;
									this.match(SQLiteParser.COMMA);
									this.state = 769;
									this.expr(0);
									}
									}
									this.state = 774;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
							}

							this.state = 777;
							this.match(SQLiteParser.CLOSE_PAR);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public raise_function(): Raise_functionContext {
		let localctx: Raise_functionContext = new Raise_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SQLiteParser.RULE_raise_function);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 786;
			this.match(SQLiteParser.RAISE_);
			this.state = 787;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 792;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
				{
				this.state = 788;
				this.match(SQLiteParser.IGNORE_);
				}
				break;
			case 25:
			case 72:
			case 126:
				{
				this.state = 789;
				_la = this._input.LA(1);
				if(!(_la===25 || _la===72 || _la===126)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 790;
				this.match(SQLiteParser.COMMA);
				this.state = 791;
				this.error_message();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 794;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_value(): Literal_valueContext {
		let localctx: Literal_valueContext = new Literal_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SQLiteParser.RULE_literal_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 796;
			_la = this._input.LA(1);
			if(!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 7) !== 0) || _la===104 || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 212995) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value_row(): Value_rowContext {
		let localctx: Value_rowContext = new Value_rowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SQLiteParser.RULE_value_row);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 798;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 799;
			this.expr(0);
			this.state = 804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 800;
				this.match(SQLiteParser.COMMA);
				this.state = 801;
				this.expr(0);
				}
				}
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 807;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public values_clause(): Values_clauseContext {
		let localctx: Values_clauseContext = new Values_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SQLiteParser.RULE_values_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 809;
			this.match(SQLiteParser.VALUES_);
			this.state = 810;
			this.value_row();
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 811;
				this.match(SQLiteParser.COMMA);
				this.state = 812;
				this.value_row();
				}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returning_clause(): Returning_clauseContext {
		let localctx: Returning_clauseContext = new Returning_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SQLiteParser.RULE_returning_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 818;
			this.match(SQLiteParser.RETURNING_);
			this.state = 819;
			this.result_column();
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 820;
				this.match(SQLiteParser.COMMA);
				this.state = 821;
				this.result_column();
				}
				}
				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_stmt(): Select_stmtContext {
		let localctx: Select_stmtContext = new Select_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, SQLiteParser.RULE_select_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 827;
				this.common_table_stmt();
				}
			}

			this.state = 830;
			this.select_core();
			this.state = 836;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 831;
					this.compound_operator();
					this.state = 832;
					this.select_core();
					}
					}
				}
				this.state = 838;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
			}
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 839;
				this.order_by_stmt();
				}
			}

			this.state = 843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98) {
				{
				this.state = 842;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_clause(): Join_clauseContext {
		let localctx: Join_clauseContext = new Join_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, SQLiteParser.RULE_join_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 845;
			this.table_or_subquery();
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5 || _la===51 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 8833) !== 0)) {
				{
				{
				this.state = 846;
				this.join_operator();
				this.state = 847;
				this.table_or_subquery();
				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107 || _la===142) {
					{
					this.state = 848;
					this.join_constraint();
					}
				}

				}
				}
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_core(): Select_coreContext {
		let localctx: Select_coreContext = new Select_coreContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, SQLiteParser.RULE_select_core);
		let _la: number;
		try {
			this.state = 919;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 130:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 856;
				this.match(SQLiteParser.SELECT_);
				this.state = 858;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 857;
					_la = this._input.LA(1);
					if(!(_la===29 || _la===62)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 860;
				this.result_column();
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 861;
					this.match(SQLiteParser.COMMA);
					this.state = 862;
					this.result_column();
					}
					}
					this.state = 867;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===75) {
					{
					this.state = 868;
					this.match(SQLiteParser.FROM_);
					this.state = 878;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
					case 1:
						{
						this.state = 869;
						this.table_or_subquery();
						this.state = 874;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===5) {
							{
							{
							this.state = 870;
							this.match(SQLiteParser.COMMA);
							this.state = 871;
							this.table_or_subquery();
							}
							}
							this.state = 876;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						break;
					case 2:
						{
						this.state = 877;
						this.join_clause();
						}
						break;
					}
					}
				}

				this.state = 884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===148) {
					{
					this.state = 882;
					this.match(SQLiteParser.WHERE_);
					this.state = 883;
					localctx._whereExpr = this.expr(0);
					}
				}

				this.state = 900;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===78) {
					{
					this.state = 886;
					this.match(SQLiteParser.GROUP_);
					this.state = 887;
					this.match(SQLiteParser.BY_);
					this.state = 888;
					localctx._expr = this.expr(0);
					localctx._groupByExpr.push(localctx._expr);
					this.state = 893;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 889;
						this.match(SQLiteParser.COMMA);
						this.state = 890;
						localctx._expr = this.expr(0);
						localctx._groupByExpr.push(localctx._expr);
						}
						}
						this.state = 895;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===79) {
						{
						this.state = 896;
						this.match(SQLiteParser.HAVING_);
						this.state = 897;
						localctx._havingExpr = this.expr(0);
						}
					}

					}
				}

				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===174) {
					{
					this.state = 902;
					this.match(SQLiteParser.WINDOW_);
					this.state = 903;
					this.window_name();
					this.state = 904;
					this.match(SQLiteParser.AS_);
					this.state = 905;
					this.window_defn();
					this.state = 913;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 906;
						this.match(SQLiteParser.COMMA);
						this.state = 907;
						this.window_name();
						this.state = 908;
						this.match(SQLiteParser.AS_);
						this.state = 909;
						this.window_defn();
						}
						}
						this.state = 915;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				}
				break;
			case 144:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 918;
				this.values_clause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_or_subquery(): Table_or_subqueryContext {
		let localctx: Table_or_subqueryContext = new Table_or_subqueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, SQLiteParser.RULE_table_or_subquery);
		let _la: number;
		try {
			this.state = 985;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 924;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 921;
					this.schema_name();
					this.state = 922;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 926;
				this.table_name();
				this.state = 931;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 928;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
					case 1:
						{
						this.state = 927;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 930;
					this.table_alias();
					}
					break;
				}
				this.state = 938;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 85:
					{
					this.state = 933;
					this.match(SQLiteParser.INDEXED_);
					this.state = 934;
					this.match(SQLiteParser.BY_);
					this.state = 935;
					this.index_name();
					}
					break;
				case 102:
					{
					this.state = 936;
					this.match(SQLiteParser.NOT_);
					this.state = 937;
					this.match(SQLiteParser.INDEXED_);
					}
					break;
				case -1:
				case 1:
				case 4:
				case 5:
				case 50:
				case 51:
				case 68:
				case 71:
				case 78:
				case 87:
				case 90:
				case 94:
				case 96:
				case 98:
				case 100:
				case 107:
				case 109:
				case 139:
				case 142:
				case 148:
				case 174:
					break;
				default:
					break;
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 943;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 940;
					this.schema_name();
					this.state = 941;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 945;
				this.table_function_name();
				this.state = 946;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 947;
				this.expr(0);
				this.state = 952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 948;
					this.match(SQLiteParser.COMMA);
					this.state = 949;
					this.expr(0);
					}
					}
					this.state = 954;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 955;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 960;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 957;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
					case 1:
						{
						this.state = 956;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 959;
					this.table_alias();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 962;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 972;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 963;
					this.table_or_subquery();
					this.state = 968;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 964;
						this.match(SQLiteParser.COMMA);
						this.state = 965;
						this.table_or_subquery();
						}
						}
						this.state = 970;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 2:
					{
					this.state = 971;
					this.join_clause();
					}
					break;
				}
				this.state = 974;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 976;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 977;
				this.select_stmt();
				this.state = 978;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 983;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 980;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
					case 1:
						{
						this.state = 979;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 982;
					this.table_alias();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public result_column(): Result_columnContext {
		let localctx: Result_columnContext = new Result_columnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, SQLiteParser.RULE_result_column);
		let _la: number;
		try {
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 987;
				this.match(SQLiteParser.STAR);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 988;
				this.table_name();
				this.state = 989;
				this.match(SQLiteParser.DOT);
				this.state = 990;
				this.match(SQLiteParser.STAR);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 992;
				this.expr(0);
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===33 || _la===185 || _la===188) {
					{
					this.state = 994;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===33) {
						{
						this.state = 993;
						this.match(SQLiteParser.AS_);
						}
					}

					this.state = 996;
					this.column_alias();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_operator(): Join_operatorContext {
		let localctx: Join_operatorContext = new Join_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, SQLiteParser.RULE_join_operator);
		let _la: number;
		try {
			this.state = 1014;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1001;
				this.match(SQLiteParser.COMMA);
				}
				break;
			case 51:
			case 87:
			case 94:
			case 96:
			case 100:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===100) {
					{
					this.state = 1002;
					this.match(SQLiteParser.NATURAL_);
					}
				}

				this.state = 1011;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 96:
					{
					this.state = 1005;
					this.match(SQLiteParser.LEFT_);
					this.state = 1007;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===110) {
						{
						this.state = 1006;
						this.match(SQLiteParser.OUTER_);
						}
					}

					}
					break;
				case 87:
					{
					this.state = 1009;
					this.match(SQLiteParser.INNER_);
					}
					break;
				case 51:
					{
					this.state = 1010;
					this.match(SQLiteParser.CROSS_);
					}
					break;
				case 94:
					break;
				default:
					break;
				}
				this.state = 1013;
				this.match(SQLiteParser.JOIN_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_constraint(): Join_constraintContext {
		let localctx: Join_constraintContext = new Join_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, SQLiteParser.RULE_join_constraint);
		let _la: number;
		try {
			this.state = 1030;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1016;
				this.match(SQLiteParser.ON_);
				this.state = 1017;
				this.expr(0);
				}
				break;
			case 142:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1018;
				this.match(SQLiteParser.USING_);
				this.state = 1019;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1020;
				this.column_name();
				this.state = 1025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1021;
					this.match(SQLiteParser.COMMA);
					this.state = 1022;
					this.column_name();
					}
					}
					this.state = 1027;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1028;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compound_operator(): Compound_operatorContext {
		let localctx: Compound_operatorContext = new Compound_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SQLiteParser.RULE_compound_operator);
		let _la: number;
		try {
			this.state = 1038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 139:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1032;
				this.match(SQLiteParser.UNION_);
				this.state = 1034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===29) {
					{
					this.state = 1033;
					this.match(SQLiteParser.ALL_);
					}
				}

				}
				break;
			case 90:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1036;
				this.match(SQLiteParser.INTERSECT_);
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1037;
				this.match(SQLiteParser.EXCEPT_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_name_list(): Column_name_listContext {
		let localctx: Column_name_listContext = new Column_name_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, SQLiteParser.RULE_column_name_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1040;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1041;
			this.column_name();
			this.state = 1046;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1042;
				this.match(SQLiteParser.COMMA);
				this.state = 1043;
				this.column_name();
				}
				}
				this.state = 1048;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1049;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualified_table_name(): Qualified_table_nameContext {
		let localctx: Qualified_table_nameContext = new Qualified_table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, SQLiteParser.RULE_qualified_table_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1054;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1051;
				this.schema_name();
				this.state = 1052;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 1056;
			this.table_name();
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 1057;
				this.match(SQLiteParser.AS_);
				this.state = 1058;
				this.alias();
				}
			}

			this.state = 1066;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 85:
				{
				this.state = 1061;
				this.match(SQLiteParser.INDEXED_);
				this.state = 1062;
				this.match(SQLiteParser.BY_);
				this.state = 1063;
				this.index_name();
				}
				break;
			case 102:
				{
				this.state = 1064;
				this.match(SQLiteParser.NOT_);
				this.state = 1065;
				this.match(SQLiteParser.INDEXED_);
				}
				break;
			case -1:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filter_clause(): Filter_clauseContext {
		let localctx: Filter_clauseContext = new Filter_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, SQLiteParser.RULE_filter_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1068;
			this.match(SQLiteParser.FILTER_);
			this.state = 1069;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1070;
			this.match(SQLiteParser.WHERE_);
			this.state = 1071;
			this.expr(0);
			this.state = 1072;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public window_defn(): Window_defnContext {
		let localctx: Window_defnContext = new Window_defnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, SQLiteParser.RULE_window_defn);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1074;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1076;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1075;
				this.base_window_name();
				}
				break;
			}
			this.state = 1088;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===153) {
				{
				this.state = 1078;
				this.match(SQLiteParser.PARTITION_);
				this.state = 1079;
				this.match(SQLiteParser.BY_);
				this.state = 1080;
				this.expr(0);
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1081;
					this.match(SQLiteParser.COMMA);
					this.state = 1082;
					this.expr(0);
					}
					}
					this.state = 1087;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			{
			this.state = 1090;
			this.match(SQLiteParser.ORDER_);
			this.state = 1091;
			this.match(SQLiteParser.BY_);
			this.state = 1092;
			this.ordering_term();
			this.state = 1097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1093;
				this.match(SQLiteParser.COMMA);
				this.state = 1094;
				this.ordering_term();
				}
				}
				this.state = 1099;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 1101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128 || _la===154 || _la===179) {
				{
				this.state = 1100;
				this.frame_spec();
				}
			}

			this.state = 1103;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public over_clause(): Over_clauseContext {
		let localctx: Over_clauseContext = new Over_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, SQLiteParser.RULE_over_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1105;
			this.match(SQLiteParser.OVER_);
			this.state = 1139;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				this.state = 1106;
				this.window_name();
				}
				break;
			case 2:
				{
				this.state = 1107;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1109;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
					this.state = 1108;
					this.base_window_name();
					}
					break;
				}
				this.state = 1121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1111;
					this.match(SQLiteParser.PARTITION_);
					this.state = 1112;
					this.match(SQLiteParser.BY_);
					this.state = 1113;
					this.expr(0);
					this.state = 1118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 1114;
						this.match(SQLiteParser.COMMA);
						this.state = 1115;
						this.expr(0);
						}
						}
						this.state = 1120;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 1123;
					this.match(SQLiteParser.ORDER_);
					this.state = 1124;
					this.match(SQLiteParser.BY_);
					this.state = 1125;
					this.ordering_term();
					this.state = 1130;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 1126;
						this.match(SQLiteParser.COMMA);
						this.state = 1127;
						this.ordering_term();
						}
						}
						this.state = 1132;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===128 || _la===154 || _la===179) {
					{
					this.state = 1135;
					this.frame_spec();
					}
				}

				this.state = 1138;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_spec(): Frame_specContext {
		let localctx: Frame_specContext = new Frame_specContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, SQLiteParser.RULE_frame_spec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1141;
			this.frame_clause();
			this.state = 1151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===180) {
				{
				this.state = 1142;
				this.match(SQLiteParser.EXCLUDE_);
				this.state = 1149;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 101:
					{
					this.state = 1143;
					this.match(SQLiteParser.NO_);
					this.state = 1144;
					this.match(SQLiteParser.OTHERS_);
					}
					break;
				case 157:
					{
					this.state = 1145;
					this.match(SQLiteParser.CURRENT_);
					this.state = 1146;
					this.match(SQLiteParser.ROW_);
					}
					break;
				case 78:
					{
					this.state = 1147;
					this.match(SQLiteParser.GROUP_);
					}
					break;
				case 181:
					{
					this.state = 1148;
					this.match(SQLiteParser.TIES_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_clause(): Frame_clauseContext {
		let localctx: Frame_clauseContext = new Frame_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, SQLiteParser.RULE_frame_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1153;
			_la = this._input.LA(1);
			if(!(_la===128 || _la===154 || _la===179)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1160;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1154;
				this.frame_single();
				}
				break;
			case 2:
				{
				this.state = 1155;
				this.match(SQLiteParser.BETWEEN_);
				this.state = 1156;
				this.frame_left();
				this.state = 1157;
				this.match(SQLiteParser.AND_);
				this.state = 1158;
				this.frame_right();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_function_invocation(): Simple_function_invocationContext {
		let localctx: Simple_function_invocationContext = new Simple_function_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, SQLiteParser.RULE_simple_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1162;
			this.simple_func();
			this.state = 1163;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 8:
			case 9:
			case 10:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
				{
				this.state = 1164;
				this.expr(0);
				this.state = 1169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1165;
					this.match(SQLiteParser.COMMA);
					this.state = 1166;
					this.expr(0);
					}
					}
					this.state = 1171;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 7:
				{
				this.state = 1172;
				this.match(SQLiteParser.STAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1175;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregate_function_invocation(): Aggregate_function_invocationContext {
		let localctx: Aggregate_function_invocationContext = new Aggregate_function_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, SQLiteParser.RULE_aggregate_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1177;
			this.aggregate_func();
			this.state = 1178;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 8:
			case 9:
			case 10:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
				{
				this.state = 1180;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
				case 1:
					{
					this.state = 1179;
					this.match(SQLiteParser.DISTINCT_);
					}
					break;
				}
				this.state = 1182;
				this.expr(0);
				this.state = 1187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1183;
					this.match(SQLiteParser.COMMA);
					this.state = 1184;
					this.expr(0);
					}
					}
					this.state = 1189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 7:
				{
				this.state = 1190;
				this.match(SQLiteParser.STAR);
				}
				break;
			case 4:
				break;
			default:
				break;
			}
			this.state = 1193;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 1195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178) {
				{
				this.state = 1194;
				this.filter_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public window_function_invocation(): Window_function_invocationContext {
		let localctx: Window_function_invocationContext = new Window_function_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, SQLiteParser.RULE_window_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1197;
			this.window_function();
			this.state = 1198;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 8:
			case 9:
			case 10:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
				{
				this.state = 1199;
				this.expr(0);
				this.state = 1204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1200;
					this.match(SQLiteParser.COMMA);
					this.state = 1201;
					this.expr(0);
					}
					}
					this.state = 1206;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 7:
				{
				this.state = 1207;
				this.match(SQLiteParser.STAR);
				}
				break;
			case 4:
				break;
			default:
				break;
			}
			this.state = 1210;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 1212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178) {
				{
				this.state = 1211;
				this.filter_clause();
				}
			}

			this.state = 1214;
			this.match(SQLiteParser.OVER_);
			this.state = 1217;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				{
				this.state = 1215;
				this.window_defn();
				}
				break;
			case 2:
				{
				this.state = 1216;
				this.window_name();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public common_table_stmt(): Common_table_stmtContext {
		let localctx: Common_table_stmtContext = new Common_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, SQLiteParser.RULE_common_table_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1219;
			this.match(SQLiteParser.WITH_);
			this.state = 1221;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1220;
				this.match(SQLiteParser.RECURSIVE_);
				}
				break;
			}
			this.state = 1223;
			this.common_table_expression();
			this.state = 1228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1224;
				this.match(SQLiteParser.COMMA);
				this.state = 1225;
				this.common_table_expression();
				}
				}
				this.state = 1230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by_stmt(): Order_by_stmtContext {
		let localctx: Order_by_stmtContext = new Order_by_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, SQLiteParser.RULE_order_by_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1231;
			this.match(SQLiteParser.ORDER_);
			this.state = 1232;
			this.match(SQLiteParser.BY_);
			this.state = 1233;
			this.ordering_term();
			this.state = 1238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1234;
				this.match(SQLiteParser.COMMA);
				this.state = 1235;
				this.ordering_term();
				}
				}
				this.state = 1240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limit_stmt(): Limit_stmtContext {
		let localctx: Limit_stmtContext = new Limit_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, SQLiteParser.RULE_limit_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1241;
			this.match(SQLiteParser.LIMIT_);
			this.state = 1242;
			this.expr(0);
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5 || _la===106) {
				{
				this.state = 1243;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===106)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1244;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ordering_term(): Ordering_termContext {
		let localctx: Ordering_termContext = new Ordering_termContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, SQLiteParser.RULE_ordering_term);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1247;
			this.expr(0);
			this.state = 1250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 1248;
				this.match(SQLiteParser.COLLATE_);
				this.state = 1249;
				this.collation_name();
				}
			}

			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34 || _la===60) {
				{
				this.state = 1252;
				this.asc_desc();
				}
			}

			this.state = 1257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===175) {
				{
				this.state = 1255;
				this.match(SQLiteParser.NULLS_);
				this.state = 1256;
				_la = this._input.LA(1);
				if(!(_la===176 || _la===177)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public asc_desc(): Asc_descContext {
		let localctx: Asc_descContext = new Asc_descContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, SQLiteParser.RULE_asc_desc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1259;
			_la = this._input.LA(1);
			if(!(_la===34 || _la===60)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_left(): Frame_leftContext {
		let localctx: Frame_leftContext = new Frame_leftContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, SQLiteParser.RULE_frame_left);
		try {
			this.state = 1271;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1261;
				this.expr(0);
				this.state = 1262;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1264;
				this.expr(0);
				this.state = 1265;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1267;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1268;
				this.match(SQLiteParser.ROW_);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1269;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1270;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_right(): Frame_rightContext {
		let localctx: Frame_rightContext = new Frame_rightContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, SQLiteParser.RULE_frame_right);
		try {
			this.state = 1283;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1273;
				this.expr(0);
				this.state = 1274;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1276;
				this.expr(0);
				this.state = 1277;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1279;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1280;
				this.match(SQLiteParser.ROW_);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1281;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1282;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_single(): Frame_singleContext {
		let localctx: Frame_singleContext = new Frame_singleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, SQLiteParser.RULE_frame_single);
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1285;
				this.expr(0);
				this.state = 1286;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1288;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1289;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1290;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1291;
				this.match(SQLiteParser.ROW_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public window_function(): Window_functionContext {
		let localctx: Window_functionContext = new Window_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, SQLiteParser.RULE_window_function);
		let _la: number;
		try {
			this.state = 1379;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 151:
			case 162:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1294;
				_la = this._input.LA(1);
				if(!(_la===151 || _la===162)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1295;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1296;
				this.expr(0);
				this.state = 1297;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1298;
				this.match(SQLiteParser.OVER_);
				this.state = 1299;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1300;
					this.partition_by();
					}
				}

				this.state = 1303;
				this.order_by_expr_asc_desc();
				this.state = 1305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===128 || _la===154 || _la===179) {
					{
					this.state = 1304;
					this.frame_clause();
					}
				}

				this.state = 1307;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 159:
			case 166:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1309;
				_la = this._input.LA(1);
				if(!(_la===159 || _la===166)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1310;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1311;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1312;
				this.match(SQLiteParser.OVER_);
				this.state = 1313;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1314;
					this.partition_by();
					}
				}

				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 1317;
					this.order_by_expr();
					}
				}

				this.state = 1320;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 160:
			case 167:
			case 168:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1321;
				_la = this._input.LA(1);
				if(!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 385) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1322;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1323;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1324;
				this.match(SQLiteParser.OVER_);
				this.state = 1325;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1326;
					this.partition_by();
					}
				}

				this.state = 1329;
				this.order_by_expr_asc_desc();
				this.state = 1330;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 161:
			case 163:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1332;
				_la = this._input.LA(1);
				if(!(_la===161 || _la===163)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1333;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1334;
				this.expr(0);
				this.state = 1336;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1335;
					this.offset();
					}
					break;
				}
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5) {
					{
					this.state = 1338;
					this.default_value();
					}
				}

				this.state = 1341;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1342;
				this.match(SQLiteParser.OVER_);
				this.state = 1343;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1344;
					this.partition_by();
					}
				}

				this.state = 1347;
				this.order_by_expr_asc_desc();
				this.state = 1348;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 164:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1350;
				this.match(SQLiteParser.NTH_VALUE_);
				this.state = 1351;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1352;
				this.expr(0);
				this.state = 1353;
				this.match(SQLiteParser.COMMA);
				this.state = 1354;
				this.signed_number();
				this.state = 1355;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1356;
				this.match(SQLiteParser.OVER_);
				this.state = 1357;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1358;
					this.partition_by();
					}
				}

				this.state = 1361;
				this.order_by_expr_asc_desc();
				this.state = 1363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===128 || _la===154 || _la===179) {
					{
					this.state = 1362;
					this.frame_clause();
					}
				}

				this.state = 1365;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 165:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1367;
				this.match(SQLiteParser.NTILE_);
				this.state = 1368;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1369;
				this.expr(0);
				this.state = 1370;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1371;
				this.match(SQLiteParser.OVER_);
				this.state = 1372;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1373;
					this.partition_by();
					}
				}

				this.state = 1376;
				this.order_by_expr_asc_desc();
				this.state = 1377;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public offset(): OffsetContext {
		let localctx: OffsetContext = new OffsetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, SQLiteParser.RULE_offset);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1381;
			this.match(SQLiteParser.COMMA);
			this.state = 1382;
			this.signed_number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public default_value(): Default_valueContext {
		let localctx: Default_valueContext = new Default_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, SQLiteParser.RULE_default_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1384;
			this.match(SQLiteParser.COMMA);
			this.state = 1385;
			this.signed_number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partition_by(): Partition_byContext {
		let localctx: Partition_byContext = new Partition_byContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, SQLiteParser.RULE_partition_by);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1387;
			this.match(SQLiteParser.PARTITION_);
			this.state = 1388;
			this.match(SQLiteParser.BY_);
			this.state = 1390;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1389;
					this.expr(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1392;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by_expr(): Order_by_exprContext {
		let localctx: Order_by_exprContext = new Order_by_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, SQLiteParser.RULE_order_by_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1394;
			this.match(SQLiteParser.ORDER_);
			this.state = 1395;
			this.match(SQLiteParser.BY_);
			this.state = 1397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1396;
				this.expr(0);
				}
				}
				this.state = 1399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261414664) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4026531839) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 1042284543) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by_expr_asc_desc(): Order_by_expr_asc_descContext {
		let localctx: Order_by_expr_asc_descContext = new Order_by_expr_asc_descContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, SQLiteParser.RULE_order_by_expr_asc_desc);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1401;
			this.match(SQLiteParser.ORDER_);
			this.state = 1402;
			this.match(SQLiteParser.BY_);
			this.state = 1403;
			this.expr_asc_desc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_asc_desc(): Expr_asc_descContext {
		let localctx: Expr_asc_descContext = new Expr_asc_descContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, SQLiteParser.RULE_expr_asc_desc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1405;
			this.expr(0);
			this.state = 1407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34 || _la===60) {
				{
				this.state = 1406;
				this.asc_desc();
				}
			}

			this.state = 1416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1409;
				this.match(SQLiteParser.COMMA);
				this.state = 1410;
				this.expr(0);
				this.state = 1412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===34 || _la===60) {
					{
					this.state = 1411;
					this.asc_desc();
					}
				}

				}
				}
				this.state = 1418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initial_select(): Initial_selectContext {
		let localctx: Initial_selectContext = new Initial_selectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, SQLiteParser.RULE_initial_select);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1419;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recursive_select(): Recursive_selectContext {
		let localctx: Recursive_selectContext = new Recursive_selectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, SQLiteParser.RULE_recursive_select);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1421;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let localctx: Unary_operatorContext = new Unary_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, SQLiteParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1423;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0) || _la===102)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public error_message(): Error_messageContext {
		let localctx: Error_messageContext = new Error_messageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, SQLiteParser.RULE_error_message);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1425;
			this.match(SQLiteParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_argument(): Module_argumentContext {
		let localctx: Module_argumentContext = new Module_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, SQLiteParser.RULE_module_argument);
		try {
			this.state = 1429;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1427;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1428;
				this.column_def();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_alias(): Column_aliasContext {
		let localctx: Column_aliasContext = new Column_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, SQLiteParser.RULE_column_alias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1431;
			_la = this._input.LA(1);
			if(!(_la===185 || _la===188)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, SQLiteParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1433;
			_la = this._input.LA(1);
			if(!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 4294967295) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 4294967295) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 4294967295) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 4294967287) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 268435455) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let localctx: NameContext = new NameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, SQLiteParser.RULE_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1435;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let localctx: Function_nameContext = new Function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, SQLiteParser.RULE_function_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1437;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public schema_name(): Schema_nameContext {
		let localctx: Schema_nameContext = new Schema_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, SQLiteParser.RULE_schema_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1439;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_name(): Table_nameContext {
		let localctx: Table_nameContext = new Table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, SQLiteParser.RULE_table_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1441;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_or_index_name(): Table_or_index_nameContext {
		let localctx: Table_or_index_nameContext = new Table_or_index_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, SQLiteParser.RULE_table_or_index_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1443;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_name(): Column_nameContext {
		let localctx: Column_nameContext = new Column_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, SQLiteParser.RULE_column_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1445;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collation_name(): Collation_nameContext {
		let localctx: Collation_nameContext = new Collation_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, SQLiteParser.RULE_collation_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1447;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public foreign_table(): Foreign_tableContext {
		let localctx: Foreign_tableContext = new Foreign_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, SQLiteParser.RULE_foreign_table);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1449;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public index_name(): Index_nameContext {
		let localctx: Index_nameContext = new Index_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, SQLiteParser.RULE_index_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1451;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trigger_name(): Trigger_nameContext {
		let localctx: Trigger_nameContext = new Trigger_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, SQLiteParser.RULE_trigger_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1453;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public view_name(): View_nameContext {
		let localctx: View_nameContext = new View_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, SQLiteParser.RULE_view_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1455;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_name(): Module_nameContext {
		let localctx: Module_nameContext = new Module_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, SQLiteParser.RULE_module_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1457;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pragma_name(): Pragma_nameContext {
		let localctx: Pragma_nameContext = new Pragma_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, SQLiteParser.RULE_pragma_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1459;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public savepoint_name(): Savepoint_nameContext {
		let localctx: Savepoint_nameContext = new Savepoint_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, SQLiteParser.RULE_savepoint_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1461;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_alias(): Table_aliasContext {
		let localctx: Table_aliasContext = new Table_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, SQLiteParser.RULE_table_alias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1463;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transaction_name(): Transaction_nameContext {
		let localctx: Transaction_nameContext = new Transaction_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, SQLiteParser.RULE_transaction_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1465;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public window_name(): Window_nameContext {
		let localctx: Window_nameContext = new Window_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, SQLiteParser.RULE_window_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1467;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alias(): AliasContext {
		let localctx: AliasContext = new AliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, SQLiteParser.RULE_alias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1469;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filename(): FilenameContext {
		let localctx: FilenameContext = new FilenameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, SQLiteParser.RULE_filename);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1471;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public base_window_name(): Base_window_nameContext {
		let localctx: Base_window_nameContext = new Base_window_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, SQLiteParser.RULE_base_window_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1473;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_func(): Simple_funcContext {
		let localctx: Simple_funcContext = new Simple_funcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, SQLiteParser.RULE_simple_func);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1475;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregate_func(): Aggregate_funcContext {
		let localctx: Aggregate_funcContext = new Aggregate_funcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, SQLiteParser.RULE_aggregate_func);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1477;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_function_name(): Table_function_nameContext {
		let localctx: Table_function_nameContext = new Table_function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, SQLiteParser.RULE_table_function_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1479;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public any_name(): Any_nameContext {
		let localctx: Any_nameContext = new Any_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, SQLiteParser.RULE_any_name);
		try {
			this.state = 1488;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 185:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1481;
				this.match(SQLiteParser.IDENTIFIER);
				}
				break;
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1482;
				this.keyword();
				}
				break;
			case 188:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1483;
				this.match(SQLiteParser.STRING_LITERAL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1484;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1485;
				this.any_name();
				this.state = 1486;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 20);
		case 1:
			return this.precpred(this._ctx, 19);
		case 2:
			return this.precpred(this._ctx, 18);
		case 3:
			return this.precpred(this._ctx, 17);
		case 4:
			return this.precpred(this._ctx, 16);
		case 5:
			return this.precpred(this._ctx, 15);
		case 6:
			return this.precpred(this._ctx, 14);
		case 7:
			return this.precpred(this._ctx, 13);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		case 10:
			return this.precpred(this._ctx, 9);
		case 11:
			return this.precpred(this._ctx, 8);
		case 12:
			return this.precpred(this._ctx, 7);
		case 13:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,193,1491,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,1,0,5,0,178,8,0,
	10,0,12,0,181,9,0,1,0,1,0,1,1,5,1,186,8,1,10,1,12,1,189,9,1,1,1,1,1,4,1,
	193,8,1,11,1,12,1,194,1,1,5,1,198,8,1,10,1,12,1,201,9,1,1,1,5,1,204,8,1,
	10,1,12,1,207,9,1,1,2,1,2,1,2,3,2,212,8,2,3,2,214,8,2,1,2,1,2,1,2,3,2,219,
	8,2,1,3,1,3,3,3,223,8,3,1,3,1,3,3,3,227,8,3,1,3,3,3,230,8,3,1,4,1,4,3,4,
	234,8,4,1,4,1,4,1,4,1,4,3,4,240,8,4,1,4,1,4,1,4,3,4,245,8,4,1,4,1,4,1,4,
	1,4,1,4,5,4,252,8,4,10,4,12,4,255,9,4,1,4,1,4,5,4,259,8,4,10,4,12,4,262,
	9,4,1,4,1,4,1,4,3,4,267,8,4,1,4,1,4,3,4,271,8,4,1,5,1,5,3,5,275,8,5,1,5,
	5,5,278,8,5,10,5,12,5,281,9,5,1,6,4,6,284,8,6,11,6,12,6,285,1,6,1,6,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,298,8,6,1,7,1,7,3,7,302,8,7,1,7,1,7,1,7,
	3,7,307,8,7,1,7,3,7,310,8,7,1,7,3,7,313,8,7,1,7,3,7,316,8,7,1,7,1,7,3,7,
	320,8,7,1,7,3,7,323,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	3,7,337,8,7,1,7,1,7,1,7,1,7,1,7,3,7,344,8,7,1,7,1,7,1,7,1,7,1,7,3,7,351,
	8,7,3,7,353,8,7,1,8,3,8,356,8,8,1,8,1,8,1,9,1,9,3,9,362,8,9,1,9,1,9,1,9,
	3,9,367,8,9,1,9,1,9,1,9,1,9,5,9,373,8,9,10,9,12,9,376,9,9,1,9,1,9,3,9,380,
	8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,393,8,9,10,9,12,9,396,
	9,9,1,9,1,9,1,9,3,9,401,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,409,8,10,
	10,10,12,10,412,9,10,1,10,1,10,3,10,416,8,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,3,10,426,8,10,1,10,1,10,5,10,430,8,10,10,10,12,10,433,9,10,
	1,10,3,10,436,8,10,1,10,1,10,1,10,3,10,441,8,10,3,10,443,8,10,1,11,1,11,
	1,11,1,11,1,12,1,12,3,12,451,8,12,1,12,1,12,1,12,1,12,3,12,457,8,12,1,12,
	1,12,1,12,3,12,462,8,12,1,12,1,12,1,12,1,12,1,12,5,12,469,8,12,10,12,12,
	12,472,9,12,1,12,1,12,3,12,476,8,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,
	1,13,1,13,3,13,487,8,13,1,13,1,13,1,13,3,13,492,8,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,5,13,501,8,13,10,13,12,13,504,9,13,1,13,1,13,3,13,508,8,
	13,1,14,1,14,3,14,512,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
	1,14,1,14,1,14,5,14,526,8,14,10,14,12,14,529,9,14,1,15,1,15,1,15,1,15,1,
	15,5,15,536,8,15,10,15,12,15,539,9,15,1,15,1,15,3,15,543,8,15,1,16,1,16,
	1,16,1,16,1,16,1,16,3,16,551,8,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,
	17,5,17,561,8,17,10,17,12,17,564,9,17,1,17,1,17,3,17,568,8,17,1,17,1,17,
	1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,581,8,18,1,18,1,18,1,
	18,3,18,586,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,595,8,18,1,18,
	1,18,1,18,5,18,600,8,18,10,18,12,18,603,9,18,1,18,3,18,606,8,18,1,18,1,
	18,3,18,610,8,18,1,18,3,18,613,8,18,1,18,1,18,1,18,1,18,5,18,619,8,18,10,
	18,12,18,622,9,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,
	634,8,18,1,18,3,18,637,8,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,645,8,18,
	1,18,1,18,1,18,1,18,1,18,4,18,652,8,18,11,18,12,18,653,1,18,1,18,3,18,658,
	8,18,1,18,1,18,1,18,3,18,663,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
	18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
	1,18,1,18,1,18,1,18,1,18,1,18,3,18,693,8,18,1,18,1,18,1,18,1,18,1,18,1,
	18,1,18,1,18,1,18,1,18,3,18,705,8,18,1,18,1,18,1,18,3,18,710,8,18,1,18,
	1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,722,8,18,1,18,1,18,1,
	18,1,18,3,18,728,8,18,1,18,1,18,1,18,1,18,1,18,3,18,735,8,18,1,18,1,18,
	3,18,739,8,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,747,8,18,10,18,12,18,750,
	9,18,3,18,752,8,18,1,18,1,18,1,18,1,18,3,18,758,8,18,1,18,1,18,1,18,1,18,
	3,18,764,8,18,1,18,1,18,1,18,1,18,1,18,5,18,771,8,18,10,18,12,18,774,9,
	18,3,18,776,8,18,1,18,1,18,3,18,780,8,18,5,18,782,8,18,10,18,12,18,785,
	9,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,793,8,19,1,19,1,19,1,20,1,20,1,
	21,1,21,1,21,1,21,5,21,803,8,21,10,21,12,21,806,9,21,1,21,1,21,1,22,1,22,
	1,22,1,22,5,22,814,8,22,10,22,12,22,817,9,22,1,23,1,23,1,23,1,23,5,23,823,
	8,23,10,23,12,23,826,9,23,1,24,3,24,829,8,24,1,24,1,24,1,24,1,24,5,24,835,
	8,24,10,24,12,24,838,9,24,1,24,3,24,841,8,24,1,24,3,24,844,8,24,1,25,1,
	25,1,25,1,25,3,25,850,8,25,5,25,852,8,25,10,25,12,25,855,9,25,1,26,1,26,
	3,26,859,8,26,1,26,1,26,1,26,5,26,864,8,26,10,26,12,26,867,9,26,1,26,1,
	26,1,26,1,26,5,26,873,8,26,10,26,12,26,876,9,26,1,26,3,26,879,8,26,3,26,
	881,8,26,1,26,1,26,3,26,885,8,26,1,26,1,26,1,26,1,26,1,26,5,26,892,8,26,
	10,26,12,26,895,9,26,1,26,1,26,3,26,899,8,26,3,26,901,8,26,1,26,1,26,1,
	26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,912,8,26,10,26,12,26,915,9,26,3,26,
	917,8,26,1,26,3,26,920,8,26,1,27,1,27,1,27,3,27,925,8,27,1,27,1,27,3,27,
	929,8,27,1,27,3,27,932,8,27,1,27,1,27,1,27,1,27,1,27,3,27,939,8,27,1,27,
	1,27,1,27,3,27,944,8,27,1,27,1,27,1,27,1,27,1,27,5,27,951,8,27,10,27,12,
	27,954,9,27,1,27,1,27,3,27,958,8,27,1,27,3,27,961,8,27,1,27,1,27,1,27,1,
	27,5,27,967,8,27,10,27,12,27,970,9,27,1,27,3,27,973,8,27,1,27,1,27,1,27,
	1,27,1,27,1,27,3,27,981,8,27,1,27,3,27,984,8,27,3,27,986,8,27,1,28,1,28,
	1,28,1,28,1,28,1,28,1,28,3,28,995,8,28,1,28,3,28,998,8,28,3,28,1000,8,28,
	1,29,1,29,3,29,1004,8,29,1,29,1,29,3,29,1008,8,29,1,29,1,29,3,29,1012,8,
	29,1,29,3,29,1015,8,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,1024,8,30,
	10,30,12,30,1027,9,30,1,30,1,30,3,30,1031,8,30,1,31,1,31,3,31,1035,8,31,
	1,31,1,31,3,31,1039,8,31,1,32,1,32,1,32,1,32,5,32,1045,8,32,10,32,12,32,
	1048,9,32,1,32,1,32,1,33,1,33,1,33,3,33,1055,8,33,1,33,1,33,1,33,3,33,1060,
	8,33,1,33,1,33,1,33,1,33,1,33,3,33,1067,8,33,1,34,1,34,1,34,1,34,1,34,1,
	34,1,35,1,35,3,35,1077,8,35,1,35,1,35,1,35,1,35,1,35,5,35,1084,8,35,10,
	35,12,35,1087,9,35,3,35,1089,8,35,1,35,1,35,1,35,1,35,1,35,5,35,1096,8,
	35,10,35,12,35,1099,9,35,1,35,3,35,1102,8,35,1,35,1,35,1,36,1,36,1,36,1,
	36,3,36,1110,8,36,1,36,1,36,1,36,1,36,1,36,5,36,1117,8,36,10,36,12,36,1120,
	9,36,3,36,1122,8,36,1,36,1,36,1,36,1,36,1,36,5,36,1129,8,36,10,36,12,36,
	1132,9,36,3,36,1134,8,36,1,36,3,36,1137,8,36,1,36,3,36,1140,8,36,1,37,1,
	37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,1150,8,37,3,37,1152,8,37,1,38,1,38,
	1,38,1,38,1,38,1,38,1,38,3,38,1161,8,38,1,39,1,39,1,39,1,39,1,39,5,39,1168,
	8,39,10,39,12,39,1171,9,39,1,39,3,39,1174,8,39,1,39,1,39,1,40,1,40,1,40,
	3,40,1181,8,40,1,40,1,40,1,40,5,40,1186,8,40,10,40,12,40,1189,9,40,1,40,
	3,40,1192,8,40,1,40,1,40,3,40,1196,8,40,1,41,1,41,1,41,1,41,1,41,5,41,1203,
	8,41,10,41,12,41,1206,9,41,1,41,3,41,1209,8,41,1,41,1,41,3,41,1213,8,41,
	1,41,1,41,1,41,3,41,1218,8,41,1,42,1,42,3,42,1222,8,42,1,42,1,42,1,42,5,
	42,1227,8,42,10,42,12,42,1230,9,42,1,43,1,43,1,43,1,43,1,43,5,43,1237,8,
	43,10,43,12,43,1240,9,43,1,44,1,44,1,44,1,44,3,44,1246,8,44,1,45,1,45,1,
	45,3,45,1251,8,45,1,45,3,45,1254,8,45,1,45,1,45,3,45,1258,8,45,1,46,1,46,
	1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,1272,8,47,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,1284,8,48,1,49,1,49,1,49,
	1,49,1,49,1,49,1,49,3,49,1293,8,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,
	50,1302,8,50,1,50,1,50,3,50,1306,8,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,
	1,50,3,50,1316,8,50,1,50,3,50,1319,8,50,1,50,1,50,1,50,1,50,1,50,1,50,1,
	50,3,50,1328,8,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,1337,8,50,1,50,
	3,50,1340,8,50,1,50,1,50,1,50,1,50,3,50,1346,8,50,1,50,1,50,1,50,1,50,1,
	50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,1360,8,50,1,50,1,50,3,50,1364,
	8,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,1375,8,50,1,50,1,
	50,1,50,3,50,1380,8,50,1,51,1,51,1,51,1,52,1,52,1,52,1,53,1,53,1,53,4,53,
	1391,8,53,11,53,12,53,1392,1,54,1,54,1,54,4,54,1398,8,54,11,54,12,54,1399,
	1,55,1,55,1,55,1,55,1,56,1,56,3,56,1408,8,56,1,56,1,56,1,56,3,56,1413,8,
	56,5,56,1415,8,56,10,56,12,56,1418,9,56,1,57,1,57,1,58,1,58,1,59,1,59,1,
	60,1,60,1,61,1,61,3,61,1430,8,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,
	1,66,1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,70,1,70,1,71,1,71,1,72,1,72,1,
	73,1,73,1,74,1,74,1,75,1,75,1,76,1,76,1,77,1,77,1,78,1,78,1,79,1,79,1,80,
	1,80,1,81,1,81,1,82,1,82,1,83,1,83,1,84,1,84,1,85,1,85,1,86,1,86,1,87,1,
	87,1,87,1,87,1,87,1,87,1,87,3,87,1489,8,87,1,87,2,253,285,1,36,88,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,
	104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
	140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,
	0,25,1,0,133,134,2,0,146,146,171,171,1,0,8,9,2,0,59,59,141,141,2,0,56,56,
	104,104,2,0,58,58,82,82,5,0,25,25,72,72,81,81,122,122,126,126,2,0,7,7,12,
	13,1,0,14,17,1,0,18,21,4,0,77,77,97,97,99,99,118,118,3,0,25,25,72,72,126,
	126,5,0,52,54,104,104,172,173,186,186,188,189,2,0,29,29,62,62,3,0,128,128,
	154,154,179,179,2,0,5,5,106,106,1,0,176,177,2,0,34,34,60,60,2,0,151,151,
	162,162,2,0,159,159,166,166,2,0,160,160,167,168,2,0,161,161,163,163,2,0,
	8,10,102,102,2,0,185,185,188,188,2,0,25,123,125,180,1667,0,179,1,0,0,0,
	2,187,1,0,0,0,4,213,1,0,0,0,6,222,1,0,0,0,8,231,1,0,0,0,10,272,1,0,0,0,
	12,283,1,0,0,0,14,301,1,0,0,0,16,355,1,0,0,0,18,361,1,0,0,0,20,402,1,0,
	0,0,22,444,1,0,0,0,24,448,1,0,0,0,26,480,1,0,0,0,28,509,1,0,0,0,30,530,
	1,0,0,0,32,544,1,0,0,0,34,555,1,0,0,0,36,662,1,0,0,0,38,786,1,0,0,0,40,
	796,1,0,0,0,42,798,1,0,0,0,44,809,1,0,0,0,46,818,1,0,0,0,48,828,1,0,0,0,
	50,845,1,0,0,0,52,919,1,0,0,0,54,985,1,0,0,0,56,999,1,0,0,0,58,1014,1,0,
	0,0,60,1030,1,0,0,0,62,1038,1,0,0,0,64,1040,1,0,0,0,66,1054,1,0,0,0,68,
	1068,1,0,0,0,70,1074,1,0,0,0,72,1105,1,0,0,0,74,1141,1,0,0,0,76,1153,1,
	0,0,0,78,1162,1,0,0,0,80,1177,1,0,0,0,82,1197,1,0,0,0,84,1219,1,0,0,0,86,
	1231,1,0,0,0,88,1241,1,0,0,0,90,1247,1,0,0,0,92,1259,1,0,0,0,94,1271,1,
	0,0,0,96,1283,1,0,0,0,98,1292,1,0,0,0,100,1379,1,0,0,0,102,1381,1,0,0,0,
	104,1384,1,0,0,0,106,1387,1,0,0,0,108,1394,1,0,0,0,110,1401,1,0,0,0,112,
	1405,1,0,0,0,114,1419,1,0,0,0,116,1421,1,0,0,0,118,1423,1,0,0,0,120,1425,
	1,0,0,0,122,1429,1,0,0,0,124,1431,1,0,0,0,126,1433,1,0,0,0,128,1435,1,0,
	0,0,130,1437,1,0,0,0,132,1439,1,0,0,0,134,1441,1,0,0,0,136,1443,1,0,0,0,
	138,1445,1,0,0,0,140,1447,1,0,0,0,142,1449,1,0,0,0,144,1451,1,0,0,0,146,
	1453,1,0,0,0,148,1455,1,0,0,0,150,1457,1,0,0,0,152,1459,1,0,0,0,154,1461,
	1,0,0,0,156,1463,1,0,0,0,158,1465,1,0,0,0,160,1467,1,0,0,0,162,1469,1,0,
	0,0,164,1471,1,0,0,0,166,1473,1,0,0,0,168,1475,1,0,0,0,170,1477,1,0,0,0,
	172,1479,1,0,0,0,174,1488,1,0,0,0,176,178,3,2,1,0,177,176,1,0,0,0,178,181,
	1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,182,1,0,0,0,181,179,1,0,0,0,
	182,183,5,0,0,1,183,1,1,0,0,0,184,186,5,1,0,0,185,184,1,0,0,0,186,189,1,
	0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,190,1,0,0,0,189,187,1,0,0,0,190,
	199,3,4,2,0,191,193,5,1,0,0,192,191,1,0,0,0,193,194,1,0,0,0,194,192,1,0,
	0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,198,3,4,2,0,197,192,1,0,0,0,198,
	201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,205,1,0,0,0,201,199,1,0,
	0,0,202,204,5,1,0,0,203,202,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,
	206,1,0,0,0,206,3,1,0,0,0,207,205,1,0,0,0,208,211,5,71,0,0,209,210,5,114,
	0,0,210,212,5,111,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,
	208,1,0,0,0,213,214,1,0,0,0,214,218,1,0,0,0,215,219,3,8,4,0,216,219,3,24,
	12,0,217,219,3,26,13,0,218,215,1,0,0,0,218,216,1,0,0,0,218,217,1,0,0,0,
	219,5,1,0,0,0,220,223,3,138,69,0,221,223,3,36,18,0,222,220,1,0,0,0,222,
	221,1,0,0,0,223,226,1,0,0,0,224,225,5,45,0,0,225,227,3,140,70,0,226,224,
	1,0,0,0,226,227,1,0,0,0,227,229,1,0,0,0,228,230,3,92,46,0,229,228,1,0,0,
	0,229,230,1,0,0,0,230,7,1,0,0,0,231,233,5,50,0,0,232,234,7,0,0,0,233,232,
	1,0,0,0,233,234,1,0,0,0,234,235,1,0,0,0,235,239,5,132,0,0,236,237,5,80,
	0,0,237,238,5,102,0,0,238,240,5,70,0,0,239,236,1,0,0,0,239,240,1,0,0,0,
	240,244,1,0,0,0,241,242,3,132,66,0,242,243,5,2,0,0,243,245,1,0,0,0,244,
	241,1,0,0,0,244,245,1,0,0,0,245,246,1,0,0,0,246,270,3,134,67,0,247,248,
	5,3,0,0,248,253,3,10,5,0,249,250,5,5,0,0,250,252,3,10,5,0,251,249,1,0,0,
	0,252,255,1,0,0,0,253,254,1,0,0,0,253,251,1,0,0,0,254,260,1,0,0,0,255,253,
	1,0,0,0,256,257,5,5,0,0,257,259,3,18,9,0,258,256,1,0,0,0,259,262,1,0,0,
	0,260,258,1,0,0,0,260,261,1,0,0,0,261,263,1,0,0,0,262,260,1,0,0,0,263,266,
	5,4,0,0,264,265,5,150,0,0,265,267,5,185,0,0,266,264,1,0,0,0,266,267,1,0,
	0,0,267,271,1,0,0,0,268,269,5,33,0,0,269,271,3,48,24,0,270,247,1,0,0,0,
	270,268,1,0,0,0,271,9,1,0,0,0,272,274,3,138,69,0,273,275,3,12,6,0,274,273,
	1,0,0,0,274,275,1,0,0,0,275,279,1,0,0,0,276,278,3,14,7,0,277,276,1,0,0,
	0,278,281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,11,1,0,0,0,281,279,
	1,0,0,0,282,284,3,128,64,0,283,282,1,0,0,0,284,285,1,0,0,0,285,286,1,0,
	0,0,285,283,1,0,0,0,286,297,1,0,0,0,287,288,5,3,0,0,288,289,3,16,8,0,289,
	290,5,4,0,0,290,298,1,0,0,0,291,292,5,3,0,0,292,293,3,16,8,0,293,294,5,
	5,0,0,294,295,3,16,8,0,295,296,5,4,0,0,296,298,1,0,0,0,297,287,1,0,0,0,
	297,291,1,0,0,0,297,298,1,0,0,0,298,13,1,0,0,0,299,300,5,49,0,0,300,302,
	3,128,64,0,301,299,1,0,0,0,301,302,1,0,0,0,302,352,1,0,0,0,303,304,5,113,
	0,0,304,306,5,95,0,0,305,307,3,92,46,0,306,305,1,0,0,0,306,307,1,0,0,0,
	307,309,1,0,0,0,308,310,3,22,11,0,309,308,1,0,0,0,309,310,1,0,0,0,310,312,
	1,0,0,0,311,313,5,36,0,0,312,311,1,0,0,0,312,313,1,0,0,0,313,353,1,0,0,
	0,314,316,5,102,0,0,315,314,1,0,0,0,315,316,1,0,0,0,316,317,1,0,0,0,317,
	320,5,104,0,0,318,320,5,140,0,0,319,315,1,0,0,0,319,318,1,0,0,0,320,322,
	1,0,0,0,321,323,3,22,11,0,322,321,1,0,0,0,322,323,1,0,0,0,323,353,1,0,0,
	0,324,325,5,44,0,0,325,326,5,3,0,0,326,327,3,36,18,0,327,328,5,4,0,0,328,
	353,1,0,0,0,329,336,5,56,0,0,330,337,3,16,8,0,331,337,3,40,20,0,332,333,
	5,3,0,0,333,334,3,36,18,0,334,335,5,4,0,0,335,337,1,0,0,0,336,330,1,0,0,
	0,336,331,1,0,0,0,336,332,1,0,0,0,337,353,1,0,0,0,338,339,5,45,0,0,339,
	353,3,140,70,0,340,353,3,20,10,0,341,342,5,169,0,0,342,344,5,170,0,0,343,
	341,1,0,0,0,343,344,1,0,0,0,344,345,1,0,0,0,345,346,5,33,0,0,346,347,5,
	3,0,0,347,348,3,36,18,0,348,350,5,4,0,0,349,351,7,1,0,0,350,349,1,0,0,0,
	350,351,1,0,0,0,351,353,1,0,0,0,352,303,1,0,0,0,352,319,1,0,0,0,352,324,
	1,0,0,0,352,329,1,0,0,0,352,338,1,0,0,0,352,340,1,0,0,0,352,343,1,0,0,0,
	353,15,1,0,0,0,354,356,7,2,0,0,355,354,1,0,0,0,355,356,1,0,0,0,356,357,
	1,0,0,0,357,358,5,186,0,0,358,17,1,0,0,0,359,360,5,49,0,0,360,362,3,128,
	64,0,361,359,1,0,0,0,361,362,1,0,0,0,362,400,1,0,0,0,363,364,5,113,0,0,
	364,367,5,95,0,0,365,367,5,140,0,0,366,363,1,0,0,0,366,365,1,0,0,0,367,
	368,1,0,0,0,368,369,5,3,0,0,369,374,3,6,3,0,370,371,5,5,0,0,371,373,3,6,
	3,0,372,370,1,0,0,0,373,376,1,0,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,
	377,1,0,0,0,376,374,1,0,0,0,377,379,5,4,0,0,378,380,3,22,11,0,379,378,1,
	0,0,0,379,380,1,0,0,0,380,401,1,0,0,0,381,382,5,44,0,0,382,383,5,3,0,0,
	383,384,3,36,18,0,384,385,5,4,0,0,385,401,1,0,0,0,386,387,5,74,0,0,387,
	388,5,95,0,0,388,389,5,3,0,0,389,394,3,138,69,0,390,391,5,5,0,0,391,393,
	3,138,69,0,392,390,1,0,0,0,393,396,1,0,0,0,394,392,1,0,0,0,394,395,1,0,
	0,0,395,397,1,0,0,0,396,394,1,0,0,0,397,398,5,4,0,0,398,399,3,20,10,0,399,
	401,1,0,0,0,400,366,1,0,0,0,400,381,1,0,0,0,400,386,1,0,0,0,401,19,1,0,
	0,0,402,403,5,117,0,0,403,415,3,142,71,0,404,405,5,3,0,0,405,410,3,138,
	69,0,406,407,5,5,0,0,407,409,3,138,69,0,408,406,1,0,0,0,409,412,1,0,0,0,
	410,408,1,0,0,0,410,411,1,0,0,0,411,413,1,0,0,0,412,410,1,0,0,0,413,414,
	5,4,0,0,414,416,1,0,0,0,415,404,1,0,0,0,415,416,1,0,0,0,416,431,1,0,0,0,
	417,418,5,107,0,0,418,425,7,3,0,0,419,420,5,131,0,0,420,426,7,4,0,0,421,
	426,5,41,0,0,422,426,5,123,0,0,423,424,5,101,0,0,424,426,5,26,0,0,425,419,
	1,0,0,0,425,421,1,0,0,0,425,422,1,0,0,0,425,423,1,0,0,0,426,430,1,0,0,0,
	427,428,5,99,0,0,428,430,3,128,64,0,429,417,1,0,0,0,429,427,1,0,0,0,430,
	433,1,0,0,0,431,429,1,0,0,0,431,432,1,0,0,0,432,442,1,0,0,0,433,431,1,0,
	0,0,434,436,5,102,0,0,435,434,1,0,0,0,435,436,1,0,0,0,436,437,1,0,0,0,437,
	440,5,57,0,0,438,439,5,86,0,0,439,441,7,5,0,0,440,438,1,0,0,0,440,441,1,
	0,0,0,441,443,1,0,0,0,442,435,1,0,0,0,442,443,1,0,0,0,443,21,1,0,0,0,444,
	445,5,107,0,0,445,446,5,48,0,0,446,447,7,6,0,0,447,23,1,0,0,0,448,450,5,
	50,0,0,449,451,7,0,0,0,450,449,1,0,0,0,450,451,1,0,0,0,451,452,1,0,0,0,
	452,456,5,145,0,0,453,454,5,80,0,0,454,455,5,102,0,0,455,457,5,70,0,0,456,
	453,1,0,0,0,456,457,1,0,0,0,457,461,1,0,0,0,458,459,3,132,66,0,459,460,
	5,2,0,0,460,462,1,0,0,0,461,458,1,0,0,0,461,462,1,0,0,0,462,463,1,0,0,0,
	463,475,3,148,74,0,464,465,5,3,0,0,465,470,3,138,69,0,466,467,5,5,0,0,467,
	469,3,138,69,0,468,466,1,0,0,0,469,472,1,0,0,0,470,468,1,0,0,0,470,471,
	1,0,0,0,471,473,1,0,0,0,472,470,1,0,0,0,473,474,5,4,0,0,474,476,1,0,0,0,
	475,464,1,0,0,0,475,476,1,0,0,0,476,477,1,0,0,0,477,478,5,33,0,0,478,479,
	3,48,24,0,479,25,1,0,0,0,480,481,5,50,0,0,481,482,5,146,0,0,482,486,5,132,
	0,0,483,484,5,80,0,0,484,485,5,102,0,0,485,487,5,70,0,0,486,483,1,0,0,0,
	486,487,1,0,0,0,487,491,1,0,0,0,488,489,3,132,66,0,489,490,5,2,0,0,490,
	492,1,0,0,0,491,488,1,0,0,0,491,492,1,0,0,0,492,493,1,0,0,0,493,494,3,134,
	67,0,494,495,5,142,0,0,495,507,3,150,75,0,496,497,5,3,0,0,497,502,3,122,
	61,0,498,499,5,5,0,0,499,501,3,122,61,0,500,498,1,0,0,0,501,504,1,0,0,0,
	502,500,1,0,0,0,502,503,1,0,0,0,503,505,1,0,0,0,504,502,1,0,0,0,505,506,
	5,4,0,0,506,508,1,0,0,0,507,496,1,0,0,0,507,508,1,0,0,0,508,27,1,0,0,0,
	509,511,5,149,0,0,510,512,5,116,0,0,511,510,1,0,0,0,511,512,1,0,0,0,512,
	513,1,0,0,0,513,514,3,30,15,0,514,515,5,33,0,0,515,516,5,3,0,0,516,517,
	3,48,24,0,517,527,5,4,0,0,518,519,5,5,0,0,519,520,3,30,15,0,520,521,5,33,
	0,0,521,522,5,3,0,0,522,523,3,48,24,0,523,524,5,4,0,0,524,526,1,0,0,0,525,
	518,1,0,0,0,526,529,1,0,0,0,527,525,1,0,0,0,527,528,1,0,0,0,528,29,1,0,
	0,0,529,527,1,0,0,0,530,542,3,134,67,0,531,532,5,3,0,0,532,537,3,138,69,
	0,533,534,5,5,0,0,534,536,3,138,69,0,535,533,1,0,0,0,536,539,1,0,0,0,537,
	535,1,0,0,0,537,538,1,0,0,0,538,540,1,0,0,0,539,537,1,0,0,0,540,541,5,4,
	0,0,541,543,1,0,0,0,542,531,1,0,0,0,542,543,1,0,0,0,543,31,1,0,0,0,544,
	545,3,30,15,0,545,546,5,33,0,0,546,547,5,3,0,0,547,548,3,114,57,0,548,550,
	5,139,0,0,549,551,5,29,0,0,550,549,1,0,0,0,550,551,1,0,0,0,551,552,1,0,
	0,0,552,553,3,116,58,0,553,554,5,4,0,0,554,33,1,0,0,0,555,567,3,134,67,
	0,556,557,5,3,0,0,557,562,3,138,69,0,558,559,5,5,0,0,559,561,3,138,69,0,
	560,558,1,0,0,0,561,564,1,0,0,0,562,560,1,0,0,0,562,563,1,0,0,0,563,565,
	1,0,0,0,564,562,1,0,0,0,565,566,5,4,0,0,566,568,1,0,0,0,567,556,1,0,0,0,
	567,568,1,0,0,0,568,569,1,0,0,0,569,570,5,33,0,0,570,571,5,3,0,0,571,572,
	3,48,24,0,572,573,5,4,0,0,573,35,1,0,0,0,574,575,6,18,-1,0,575,663,3,40,
	20,0,576,663,5,187,0,0,577,578,3,132,66,0,578,579,5,2,0,0,579,581,1,0,0,
	0,580,577,1,0,0,0,580,581,1,0,0,0,581,582,1,0,0,0,582,583,3,134,67,0,583,
	584,5,2,0,0,584,586,1,0,0,0,585,580,1,0,0,0,585,586,1,0,0,0,586,587,1,0,
	0,0,587,663,3,138,69,0,588,589,3,118,59,0,589,590,3,36,18,21,590,663,1,
	0,0,0,591,592,3,130,65,0,592,605,5,3,0,0,593,595,5,62,0,0,594,593,1,0,0,
	0,594,595,1,0,0,0,595,596,1,0,0,0,596,601,3,36,18,0,597,598,5,5,0,0,598,
	600,3,36,18,0,599,597,1,0,0,0,600,603,1,0,0,0,601,599,1,0,0,0,601,602,1,
	0,0,0,602,606,1,0,0,0,603,601,1,0,0,0,604,606,5,7,0,0,605,594,1,0,0,0,605,
	604,1,0,0,0,605,606,1,0,0,0,606,607,1,0,0,0,607,609,5,4,0,0,608,610,3,68,
	34,0,609,608,1,0,0,0,609,610,1,0,0,0,610,612,1,0,0,0,611,613,3,72,36,0,
	612,611,1,0,0,0,612,613,1,0,0,0,613,663,1,0,0,0,614,615,5,3,0,0,615,620,
	3,36,18,0,616,617,5,5,0,0,617,619,3,36,18,0,618,616,1,0,0,0,619,622,1,0,
	0,0,620,618,1,0,0,0,620,621,1,0,0,0,621,623,1,0,0,0,622,620,1,0,0,0,623,
	624,5,4,0,0,624,663,1,0,0,0,625,626,5,43,0,0,626,627,5,3,0,0,627,628,3,
	36,18,0,628,629,5,33,0,0,629,630,3,12,6,0,630,631,5,4,0,0,631,663,1,0,0,
	0,632,634,5,102,0,0,633,632,1,0,0,0,633,634,1,0,0,0,634,635,1,0,0,0,635,
	637,5,70,0,0,636,633,1,0,0,0,636,637,1,0,0,0,637,638,1,0,0,0,638,639,5,
	3,0,0,639,640,3,48,24,0,640,641,5,4,0,0,641,663,1,0,0,0,642,644,5,42,0,
	0,643,645,3,36,18,0,644,643,1,0,0,0,644,645,1,0,0,0,645,651,1,0,0,0,646,
	647,5,147,0,0,647,648,3,36,18,0,648,649,5,135,0,0,649,650,3,36,18,0,650,
	652,1,0,0,0,651,646,1,0,0,0,652,653,1,0,0,0,653,651,1,0,0,0,653,654,1,0,
	0,0,654,657,1,0,0,0,655,656,5,65,0,0,656,658,3,36,18,0,657,655,1,0,0,0,
	657,658,1,0,0,0,658,659,1,0,0,0,659,660,5,66,0,0,660,663,1,0,0,0,661,663,
	3,38,19,0,662,574,1,0,0,0,662,576,1,0,0,0,662,585,1,0,0,0,662,588,1,0,0,
	0,662,591,1,0,0,0,662,614,1,0,0,0,662,625,1,0,0,0,662,636,1,0,0,0,662,642,
	1,0,0,0,662,661,1,0,0,0,663,783,1,0,0,0,664,665,10,20,0,0,665,666,5,11,
	0,0,666,782,3,36,18,21,667,668,10,19,0,0,668,669,7,7,0,0,669,782,3,36,18,
	20,670,671,10,18,0,0,671,672,7,2,0,0,672,782,3,36,18,19,673,674,10,17,0,
	0,674,675,7,8,0,0,675,782,3,36,18,18,676,677,10,16,0,0,677,678,7,9,0,0,
	678,782,3,36,18,17,679,692,10,15,0,0,680,693,5,6,0,0,681,693,5,22,0,0,682,
	693,5,23,0,0,683,693,5,24,0,0,684,693,5,92,0,0,685,686,5,92,0,0,686,693,
	5,102,0,0,687,693,5,83,0,0,688,693,5,97,0,0,689,693,5,77,0,0,690,693,5,
	99,0,0,691,693,5,118,0,0,692,680,1,0,0,0,692,681,1,0,0,0,692,682,1,0,0,
	0,692,683,1,0,0,0,692,684,1,0,0,0,692,685,1,0,0,0,692,687,1,0,0,0,692,688,
	1,0,0,0,692,689,1,0,0,0,692,690,1,0,0,0,692,691,1,0,0,0,693,694,1,0,0,0,
	694,782,3,36,18,16,695,696,10,14,0,0,696,697,5,32,0,0,697,782,3,36,18,15,
	698,699,10,13,0,0,699,700,5,108,0,0,700,782,3,36,18,14,701,702,10,6,0,0,
	702,704,5,92,0,0,703,705,5,102,0,0,704,703,1,0,0,0,704,705,1,0,0,0,705,
	706,1,0,0,0,706,782,3,36,18,7,707,709,10,5,0,0,708,710,5,102,0,0,709,708,
	1,0,0,0,709,710,1,0,0,0,710,711,1,0,0,0,711,712,5,39,0,0,712,713,3,36,18,
	0,713,714,5,32,0,0,714,715,3,36,18,6,715,782,1,0,0,0,716,717,10,9,0,0,717,
	718,5,45,0,0,718,782,3,140,70,0,719,721,10,8,0,0,720,722,5,102,0,0,721,
	720,1,0,0,0,721,722,1,0,0,0,722,723,1,0,0,0,723,724,7,10,0,0,724,727,3,
	36,18,0,725,726,5,67,0,0,726,728,3,36,18,0,727,725,1,0,0,0,727,728,1,0,
	0,0,728,782,1,0,0,0,729,734,10,7,0,0,730,735,5,93,0,0,731,735,5,103,0,0,
	732,733,5,102,0,0,733,735,5,104,0,0,734,730,1,0,0,0,734,731,1,0,0,0,734,
	732,1,0,0,0,735,782,1,0,0,0,736,738,10,4,0,0,737,739,5,102,0,0,738,737,
	1,0,0,0,738,739,1,0,0,0,739,740,1,0,0,0,740,779,5,83,0,0,741,751,5,3,0,
	0,742,752,3,48,24,0,743,748,3,36,18,0,744,745,5,5,0,0,745,747,3,36,18,0,
	746,744,1,0,0,0,747,750,1,0,0,0,748,746,1,0,0,0,748,749,1,0,0,0,749,752,
	1,0,0,0,750,748,1,0,0,0,751,742,1,0,0,0,751,743,1,0,0,0,751,752,1,0,0,0,
	752,753,1,0,0,0,753,780,5,4,0,0,754,755,3,132,66,0,755,756,5,2,0,0,756,
	758,1,0,0,0,757,754,1,0,0,0,757,758,1,0,0,0,758,759,1,0,0,0,759,780,3,134,
	67,0,760,761,3,132,66,0,761,762,5,2,0,0,762,764,1,0,0,0,763,760,1,0,0,0,
	763,764,1,0,0,0,764,765,1,0,0,0,765,766,3,172,86,0,766,775,5,3,0,0,767,
	772,3,36,18,0,768,769,5,5,0,0,769,771,3,36,18,0,770,768,1,0,0,0,771,774,
	1,0,0,0,772,770,1,0,0,0,772,773,1,0,0,0,773,776,1,0,0,0,774,772,1,0,0,0,
	775,767,1,0,0,0,775,776,1,0,0,0,776,777,1,0,0,0,777,778,5,4,0,0,778,780,
	1,0,0,0,779,741,1,0,0,0,779,757,1,0,0,0,779,763,1,0,0,0,780,782,1,0,0,0,
	781,664,1,0,0,0,781,667,1,0,0,0,781,670,1,0,0,0,781,673,1,0,0,0,781,676,
	1,0,0,0,781,679,1,0,0,0,781,695,1,0,0,0,781,698,1,0,0,0,781,701,1,0,0,0,
	781,707,1,0,0,0,781,716,1,0,0,0,781,719,1,0,0,0,781,729,1,0,0,0,781,736,
	1,0,0,0,782,785,1,0,0,0,783,781,1,0,0,0,783,784,1,0,0,0,784,37,1,0,0,0,
	785,783,1,0,0,0,786,787,5,115,0,0,787,792,5,3,0,0,788,793,5,81,0,0,789,
	790,7,11,0,0,790,791,5,5,0,0,791,793,3,120,60,0,792,788,1,0,0,0,792,789,
	1,0,0,0,793,794,1,0,0,0,794,795,5,4,0,0,795,39,1,0,0,0,796,797,7,12,0,0,
	797,41,1,0,0,0,798,799,5,3,0,0,799,804,3,36,18,0,800,801,5,5,0,0,801,803,
	3,36,18,0,802,800,1,0,0,0,803,806,1,0,0,0,804,802,1,0,0,0,804,805,1,0,0,
	0,805,807,1,0,0,0,806,804,1,0,0,0,807,808,5,4,0,0,808,43,1,0,0,0,809,810,
	5,144,0,0,810,815,3,42,21,0,811,812,5,5,0,0,812,814,3,42,21,0,813,811,1,
	0,0,0,814,817,1,0,0,0,815,813,1,0,0,0,815,816,1,0,0,0,816,45,1,0,0,0,817,
	815,1,0,0,0,818,819,5,124,0,0,819,824,3,56,28,0,820,821,5,5,0,0,821,823,
	3,56,28,0,822,820,1,0,0,0,823,826,1,0,0,0,824,822,1,0,0,0,824,825,1,0,0,
	0,825,47,1,0,0,0,826,824,1,0,0,0,827,829,3,84,42,0,828,827,1,0,0,0,828,
	829,1,0,0,0,829,830,1,0,0,0,830,836,3,52,26,0,831,832,3,62,31,0,832,833,
	3,52,26,0,833,835,1,0,0,0,834,831,1,0,0,0,835,838,1,0,0,0,836,834,1,0,0,
	0,836,837,1,0,0,0,837,840,1,0,0,0,838,836,1,0,0,0,839,841,3,86,43,0,840,
	839,1,0,0,0,840,841,1,0,0,0,841,843,1,0,0,0,842,844,3,88,44,0,843,842,1,
	0,0,0,843,844,1,0,0,0,844,49,1,0,0,0,845,853,3,54,27,0,846,847,3,58,29,
	0,847,849,3,54,27,0,848,850,3,60,30,0,849,848,1,0,0,0,849,850,1,0,0,0,850,
	852,1,0,0,0,851,846,1,0,0,0,852,855,1,0,0,0,853,851,1,0,0,0,853,854,1,0,
	0,0,854,51,1,0,0,0,855,853,1,0,0,0,856,858,5,130,0,0,857,859,7,13,0,0,858,
	857,1,0,0,0,858,859,1,0,0,0,859,860,1,0,0,0,860,865,3,56,28,0,861,862,5,
	5,0,0,862,864,3,56,28,0,863,861,1,0,0,0,864,867,1,0,0,0,865,863,1,0,0,0,
	865,866,1,0,0,0,866,880,1,0,0,0,867,865,1,0,0,0,868,878,5,75,0,0,869,874,
	3,54,27,0,870,871,5,5,0,0,871,873,3,54,27,0,872,870,1,0,0,0,873,876,1,0,
	0,0,874,872,1,0,0,0,874,875,1,0,0,0,875,879,1,0,0,0,876,874,1,0,0,0,877,
	879,3,50,25,0,878,869,1,0,0,0,878,877,1,0,0,0,879,881,1,0,0,0,880,868,1,
	0,0,0,880,881,1,0,0,0,881,884,1,0,0,0,882,883,5,148,0,0,883,885,3,36,18,
	0,884,882,1,0,0,0,884,885,1,0,0,0,885,900,1,0,0,0,886,887,5,78,0,0,887,
	888,5,40,0,0,888,893,3,36,18,0,889,890,5,5,0,0,890,892,3,36,18,0,891,889,
	1,0,0,0,892,895,1,0,0,0,893,891,1,0,0,0,893,894,1,0,0,0,894,898,1,0,0,0,
	895,893,1,0,0,0,896,897,5,79,0,0,897,899,3,36,18,0,898,896,1,0,0,0,898,
	899,1,0,0,0,899,901,1,0,0,0,900,886,1,0,0,0,900,901,1,0,0,0,901,916,1,0,
	0,0,902,903,5,174,0,0,903,904,3,160,80,0,904,905,5,33,0,0,905,913,3,70,
	35,0,906,907,5,5,0,0,907,908,3,160,80,0,908,909,5,33,0,0,909,910,3,70,35,
	0,910,912,1,0,0,0,911,906,1,0,0,0,912,915,1,0,0,0,913,911,1,0,0,0,913,914,
	1,0,0,0,914,917,1,0,0,0,915,913,1,0,0,0,916,902,1,0,0,0,916,917,1,0,0,0,
	917,920,1,0,0,0,918,920,3,44,22,0,919,856,1,0,0,0,919,918,1,0,0,0,920,53,
	1,0,0,0,921,922,3,132,66,0,922,923,5,2,0,0,923,925,1,0,0,0,924,921,1,0,
	0,0,924,925,1,0,0,0,925,926,1,0,0,0,926,931,3,134,67,0,927,929,5,33,0,0,
	928,927,1,0,0,0,928,929,1,0,0,0,929,930,1,0,0,0,930,932,3,156,78,0,931,
	928,1,0,0,0,931,932,1,0,0,0,932,938,1,0,0,0,933,934,5,85,0,0,934,935,5,
	40,0,0,935,939,3,144,72,0,936,937,5,102,0,0,937,939,5,85,0,0,938,933,1,
	0,0,0,938,936,1,0,0,0,938,939,1,0,0,0,939,986,1,0,0,0,940,941,3,132,66,
	0,941,942,5,2,0,0,942,944,1,0,0,0,943,940,1,0,0,0,943,944,1,0,0,0,944,945,
	1,0,0,0,945,946,3,172,86,0,946,947,5,3,0,0,947,952,3,36,18,0,948,949,5,
	5,0,0,949,951,3,36,18,0,950,948,1,0,0,0,951,954,1,0,0,0,952,950,1,0,0,0,
	952,953,1,0,0,0,953,955,1,0,0,0,954,952,1,0,0,0,955,960,5,4,0,0,956,958,
	5,33,0,0,957,956,1,0,0,0,957,958,1,0,0,0,958,959,1,0,0,0,959,961,3,156,
	78,0,960,957,1,0,0,0,960,961,1,0,0,0,961,986,1,0,0,0,962,972,5,3,0,0,963,
	968,3,54,27,0,964,965,5,5,0,0,965,967,3,54,27,0,966,964,1,0,0,0,967,970,
	1,0,0,0,968,966,1,0,0,0,968,969,1,0,0,0,969,973,1,0,0,0,970,968,1,0,0,0,
	971,973,3,50,25,0,972,963,1,0,0,0,972,971,1,0,0,0,973,974,1,0,0,0,974,975,
	5,4,0,0,975,986,1,0,0,0,976,977,5,3,0,0,977,978,3,48,24,0,978,983,5,4,0,
	0,979,981,5,33,0,0,980,979,1,0,0,0,980,981,1,0,0,0,981,982,1,0,0,0,982,
	984,3,156,78,0,983,980,1,0,0,0,983,984,1,0,0,0,984,986,1,0,0,0,985,924,
	1,0,0,0,985,943,1,0,0,0,985,962,1,0,0,0,985,976,1,0,0,0,986,55,1,0,0,0,
	987,1000,5,7,0,0,988,989,3,134,67,0,989,990,5,2,0,0,990,991,5,7,0,0,991,
	1000,1,0,0,0,992,997,3,36,18,0,993,995,5,33,0,0,994,993,1,0,0,0,994,995,
	1,0,0,0,995,996,1,0,0,0,996,998,3,124,62,0,997,994,1,0,0,0,997,998,1,0,
	0,0,998,1000,1,0,0,0,999,987,1,0,0,0,999,988,1,0,0,0,999,992,1,0,0,0,1000,
	57,1,0,0,0,1001,1015,5,5,0,0,1002,1004,5,100,0,0,1003,1002,1,0,0,0,1003,
	1004,1,0,0,0,1004,1011,1,0,0,0,1005,1007,5,96,0,0,1006,1008,5,110,0,0,1007,
	1006,1,0,0,0,1007,1008,1,0,0,0,1008,1012,1,0,0,0,1009,1012,5,87,0,0,1010,
	1012,5,51,0,0,1011,1005,1,0,0,0,1011,1009,1,0,0,0,1011,1010,1,0,0,0,1011,
	1012,1,0,0,0,1012,1013,1,0,0,0,1013,1015,5,94,0,0,1014,1001,1,0,0,0,1014,
	1003,1,0,0,0,1015,59,1,0,0,0,1016,1017,5,107,0,0,1017,1031,3,36,18,0,1018,
	1019,5,142,0,0,1019,1020,5,3,0,0,1020,1025,3,138,69,0,1021,1022,5,5,0,0,
	1022,1024,3,138,69,0,1023,1021,1,0,0,0,1024,1027,1,0,0,0,1025,1023,1,0,
	0,0,1025,1026,1,0,0,0,1026,1028,1,0,0,0,1027,1025,1,0,0,0,1028,1029,5,4,
	0,0,1029,1031,1,0,0,0,1030,1016,1,0,0,0,1030,1018,1,0,0,0,1031,61,1,0,0,
	0,1032,1034,5,139,0,0,1033,1035,5,29,0,0,1034,1033,1,0,0,0,1034,1035,1,
	0,0,0,1035,1039,1,0,0,0,1036,1039,5,90,0,0,1037,1039,5,68,0,0,1038,1032,
	1,0,0,0,1038,1036,1,0,0,0,1038,1037,1,0,0,0,1039,63,1,0,0,0,1040,1041,5,
	3,0,0,1041,1046,3,138,69,0,1042,1043,5,5,0,0,1043,1045,3,138,69,0,1044,
	1042,1,0,0,0,1045,1048,1,0,0,0,1046,1044,1,0,0,0,1046,1047,1,0,0,0,1047,
	1049,1,0,0,0,1048,1046,1,0,0,0,1049,1050,5,4,0,0,1050,65,1,0,0,0,1051,1052,
	3,132,66,0,1052,1053,5,2,0,0,1053,1055,1,0,0,0,1054,1051,1,0,0,0,1054,1055,
	1,0,0,0,1055,1056,1,0,0,0,1056,1059,3,134,67,0,1057,1058,5,33,0,0,1058,
	1060,3,162,81,0,1059,1057,1,0,0,0,1059,1060,1,0,0,0,1060,1066,1,0,0,0,1061,
	1062,5,85,0,0,1062,1063,5,40,0,0,1063,1067,3,144,72,0,1064,1065,5,102,0,
	0,1065,1067,5,85,0,0,1066,1061,1,0,0,0,1066,1064,1,0,0,0,1066,1067,1,0,
	0,0,1067,67,1,0,0,0,1068,1069,5,178,0,0,1069,1070,5,3,0,0,1070,1071,5,148,
	0,0,1071,1072,3,36,18,0,1072,1073,5,4,0,0,1073,69,1,0,0,0,1074,1076,5,3,
	0,0,1075,1077,3,166,83,0,1076,1075,1,0,0,0,1076,1077,1,0,0,0,1077,1088,
	1,0,0,0,1078,1079,5,153,0,0,1079,1080,5,40,0,0,1080,1085,3,36,18,0,1081,
	1082,5,5,0,0,1082,1084,3,36,18,0,1083,1081,1,0,0,0,1084,1087,1,0,0,0,1085,
	1083,1,0,0,0,1085,1086,1,0,0,0,1086,1089,1,0,0,0,1087,1085,1,0,0,0,1088,
	1078,1,0,0,0,1088,1089,1,0,0,0,1089,1090,1,0,0,0,1090,1091,5,109,0,0,1091,
	1092,5,40,0,0,1092,1097,3,90,45,0,1093,1094,5,5,0,0,1094,1096,3,90,45,0,
	1095,1093,1,0,0,0,1096,1099,1,0,0,0,1097,1095,1,0,0,0,1097,1098,1,0,0,0,
	1098,1101,1,0,0,0,1099,1097,1,0,0,0,1100,1102,3,74,37,0,1101,1100,1,0,0,
	0,1101,1102,1,0,0,0,1102,1103,1,0,0,0,1103,1104,5,4,0,0,1104,71,1,0,0,0,
	1105,1139,5,152,0,0,1106,1140,3,160,80,0,1107,1109,5,3,0,0,1108,1110,3,
	166,83,0,1109,1108,1,0,0,0,1109,1110,1,0,0,0,1110,1121,1,0,0,0,1111,1112,
	5,153,0,0,1112,1113,5,40,0,0,1113,1118,3,36,18,0,1114,1115,5,5,0,0,1115,
	1117,3,36,18,0,1116,1114,1,0,0,0,1117,1120,1,0,0,0,1118,1116,1,0,0,0,1118,
	1119,1,0,0,0,1119,1122,1,0,0,0,1120,1118,1,0,0,0,1121,1111,1,0,0,0,1121,
	1122,1,0,0,0,1122,1133,1,0,0,0,1123,1124,5,109,0,0,1124,1125,5,40,0,0,1125,
	1130,3,90,45,0,1126,1127,5,5,0,0,1127,1129,3,90,45,0,1128,1126,1,0,0,0,
	1129,1132,1,0,0,0,1130,1128,1,0,0,0,1130,1131,1,0,0,0,1131,1134,1,0,0,0,
	1132,1130,1,0,0,0,1133,1123,1,0,0,0,1133,1134,1,0,0,0,1134,1136,1,0,0,0,
	1135,1137,3,74,37,0,1136,1135,1,0,0,0,1136,1137,1,0,0,0,1137,1138,1,0,0,
	0,1138,1140,5,4,0,0,1139,1106,1,0,0,0,1139,1107,1,0,0,0,1140,73,1,0,0,0,
	1141,1151,3,76,38,0,1142,1149,5,180,0,0,1143,1144,5,101,0,0,1144,1150,5,
	182,0,0,1145,1146,5,157,0,0,1146,1150,5,127,0,0,1147,1150,5,78,0,0,1148,
	1150,5,181,0,0,1149,1143,1,0,0,0,1149,1145,1,0,0,0,1149,1147,1,0,0,0,1149,
	1148,1,0,0,0,1150,1152,1,0,0,0,1151,1142,1,0,0,0,1151,1152,1,0,0,0,1152,
	75,1,0,0,0,1153,1160,7,14,0,0,1154,1161,3,98,49,0,1155,1156,5,39,0,0,1156,
	1157,3,94,47,0,1157,1158,5,32,0,0,1158,1159,3,96,48,0,1159,1161,1,0,0,0,
	1160,1154,1,0,0,0,1160,1155,1,0,0,0,1161,77,1,0,0,0,1162,1163,3,168,84,
	0,1163,1173,5,3,0,0,1164,1169,3,36,18,0,1165,1166,5,5,0,0,1166,1168,3,36,
	18,0,1167,1165,1,0,0,0,1168,1171,1,0,0,0,1169,1167,1,0,0,0,1169,1170,1,
	0,0,0,1170,1174,1,0,0,0,1171,1169,1,0,0,0,1172,1174,5,7,0,0,1173,1164,1,
	0,0,0,1173,1172,1,0,0,0,1174,1175,1,0,0,0,1175,1176,5,4,0,0,1176,79,1,0,
	0,0,1177,1178,3,170,85,0,1178,1191,5,3,0,0,1179,1181,5,62,0,0,1180,1179,
	1,0,0,0,1180,1181,1,0,0,0,1181,1182,1,0,0,0,1182,1187,3,36,18,0,1183,1184,
	5,5,0,0,1184,1186,3,36,18,0,1185,1183,1,0,0,0,1186,1189,1,0,0,0,1187,1185,
	1,0,0,0,1187,1188,1,0,0,0,1188,1192,1,0,0,0,1189,1187,1,0,0,0,1190,1192,
	5,7,0,0,1191,1180,1,0,0,0,1191,1190,1,0,0,0,1191,1192,1,0,0,0,1192,1193,
	1,0,0,0,1193,1195,5,4,0,0,1194,1196,3,68,34,0,1195,1194,1,0,0,0,1195,1196,
	1,0,0,0,1196,81,1,0,0,0,1197,1198,3,100,50,0,1198,1208,5,3,0,0,1199,1204,
	3,36,18,0,1200,1201,5,5,0,0,1201,1203,3,36,18,0,1202,1200,1,0,0,0,1203,
	1206,1,0,0,0,1204,1202,1,0,0,0,1204,1205,1,0,0,0,1205,1209,1,0,0,0,1206,
	1204,1,0,0,0,1207,1209,5,7,0,0,1208,1199,1,0,0,0,1208,1207,1,0,0,0,1208,
	1209,1,0,0,0,1209,1210,1,0,0,0,1210,1212,5,4,0,0,1211,1213,3,68,34,0,1212,
	1211,1,0,0,0,1212,1213,1,0,0,0,1213,1214,1,0,0,0,1214,1217,5,152,0,0,1215,
	1218,3,70,35,0,1216,1218,3,160,80,0,1217,1215,1,0,0,0,1217,1216,1,0,0,0,
	1218,83,1,0,0,0,1219,1221,5,149,0,0,1220,1222,5,116,0,0,1221,1220,1,0,0,
	0,1221,1222,1,0,0,0,1222,1223,1,0,0,0,1223,1228,3,34,17,0,1224,1225,5,5,
	0,0,1225,1227,3,34,17,0,1226,1224,1,0,0,0,1227,1230,1,0,0,0,1228,1226,1,
	0,0,0,1228,1229,1,0,0,0,1229,85,1,0,0,0,1230,1228,1,0,0,0,1231,1232,5,109,
	0,0,1232,1233,5,40,0,0,1233,1238,3,90,45,0,1234,1235,5,5,0,0,1235,1237,
	3,90,45,0,1236,1234,1,0,0,0,1237,1240,1,0,0,0,1238,1236,1,0,0,0,1238,1239,
	1,0,0,0,1239,87,1,0,0,0,1240,1238,1,0,0,0,1241,1242,5,98,0,0,1242,1245,
	3,36,18,0,1243,1244,7,15,0,0,1244,1246,3,36,18,0,1245,1243,1,0,0,0,1245,
	1246,1,0,0,0,1246,89,1,0,0,0,1247,1250,3,36,18,0,1248,1249,5,45,0,0,1249,
	1251,3,140,70,0,1250,1248,1,0,0,0,1250,1251,1,0,0,0,1251,1253,1,0,0,0,1252,
	1254,3,92,46,0,1253,1252,1,0,0,0,1253,1254,1,0,0,0,1254,1257,1,0,0,0,1255,
	1256,5,175,0,0,1256,1258,7,16,0,0,1257,1255,1,0,0,0,1257,1258,1,0,0,0,1258,
	91,1,0,0,0,1259,1260,7,17,0,0,1260,93,1,0,0,0,1261,1262,3,36,18,0,1262,
	1263,5,155,0,0,1263,1272,1,0,0,0,1264,1265,3,36,18,0,1265,1266,5,158,0,
	0,1266,1272,1,0,0,0,1267,1268,5,157,0,0,1268,1272,5,127,0,0,1269,1270,5,
	156,0,0,1270,1272,5,155,0,0,1271,1261,1,0,0,0,1271,1264,1,0,0,0,1271,1267,
	1,0,0,0,1271,1269,1,0,0,0,1272,95,1,0,0,0,1273,1274,3,36,18,0,1274,1275,
	5,155,0,0,1275,1284,1,0,0,0,1276,1277,3,36,18,0,1277,1278,5,158,0,0,1278,
	1284,1,0,0,0,1279,1280,5,157,0,0,1280,1284,5,127,0,0,1281,1282,5,156,0,
	0,1282,1284,5,158,0,0,1283,1273,1,0,0,0,1283,1276,1,0,0,0,1283,1279,1,0,
	0,0,1283,1281,1,0,0,0,1284,97,1,0,0,0,1285,1286,3,36,18,0,1286,1287,5,155,
	0,0,1287,1293,1,0,0,0,1288,1289,5,156,0,0,1289,1293,5,155,0,0,1290,1291,
	5,157,0,0,1291,1293,5,127,0,0,1292,1285,1,0,0,0,1292,1288,1,0,0,0,1292,
	1290,1,0,0,0,1293,99,1,0,0,0,1294,1295,7,18,0,0,1295,1296,5,3,0,0,1296,
	1297,3,36,18,0,1297,1298,5,4,0,0,1298,1299,5,152,0,0,1299,1301,5,3,0,0,
	1300,1302,3,106,53,0,1301,1300,1,0,0,0,1301,1302,1,0,0,0,1302,1303,1,0,
	0,0,1303,1305,3,110,55,0,1304,1306,3,76,38,0,1305,1304,1,0,0,0,1305,1306,
	1,0,0,0,1306,1307,1,0,0,0,1307,1308,5,4,0,0,1308,1380,1,0,0,0,1309,1310,
	7,19,0,0,1310,1311,5,3,0,0,1311,1312,5,4,0,0,1312,1313,5,152,0,0,1313,1315,
	5,3,0,0,1314,1316,3,106,53,0,1315,1314,1,0,0,0,1315,1316,1,0,0,0,1316,1318,
	1,0,0,0,1317,1319,3,108,54,0,1318,1317,1,0,0,0,1318,1319,1,0,0,0,1319,1320,
	1,0,0,0,1320,1380,5,4,0,0,1321,1322,7,20,0,0,1322,1323,5,3,0,0,1323,1324,
	5,4,0,0,1324,1325,5,152,0,0,1325,1327,5,3,0,0,1326,1328,3,106,53,0,1327,
	1326,1,0,0,0,1327,1328,1,0,0,0,1328,1329,1,0,0,0,1329,1330,3,110,55,0,1330,
	1331,5,4,0,0,1331,1380,1,0,0,0,1332,1333,7,21,0,0,1333,1334,5,3,0,0,1334,
	1336,3,36,18,0,1335,1337,3,102,51,0,1336,1335,1,0,0,0,1336,1337,1,0,0,0,
	1337,1339,1,0,0,0,1338,1340,3,104,52,0,1339,1338,1,0,0,0,1339,1340,1,0,
	0,0,1340,1341,1,0,0,0,1341,1342,5,4,0,0,1342,1343,5,152,0,0,1343,1345,5,
	3,0,0,1344,1346,3,106,53,0,1345,1344,1,0,0,0,1345,1346,1,0,0,0,1346,1347,
	1,0,0,0,1347,1348,3,110,55,0,1348,1349,5,4,0,0,1349,1380,1,0,0,0,1350,1351,
	5,164,0,0,1351,1352,5,3,0,0,1352,1353,3,36,18,0,1353,1354,5,5,0,0,1354,
	1355,3,16,8,0,1355,1356,5,4,0,0,1356,1357,5,152,0,0,1357,1359,5,3,0,0,1358,
	1360,3,106,53,0,1359,1358,1,0,0,0,1359,1360,1,0,0,0,1360,1361,1,0,0,0,1361,
	1363,3,110,55,0,1362,1364,3,76,38,0,1363,1362,1,0,0,0,1363,1364,1,0,0,0,
	1364,1365,1,0,0,0,1365,1366,5,4,0,0,1366,1380,1,0,0,0,1367,1368,5,165,0,
	0,1368,1369,5,3,0,0,1369,1370,3,36,18,0,1370,1371,5,4,0,0,1371,1372,5,152,
	0,0,1372,1374,5,3,0,0,1373,1375,3,106,53,0,1374,1373,1,0,0,0,1374,1375,
	1,0,0,0,1375,1376,1,0,0,0,1376,1377,3,110,55,0,1377,1378,5,4,0,0,1378,1380,
	1,0,0,0,1379,1294,1,0,0,0,1379,1309,1,0,0,0,1379,1321,1,0,0,0,1379,1332,
	1,0,0,0,1379,1350,1,0,0,0,1379,1367,1,0,0,0,1380,101,1,0,0,0,1381,1382,
	5,5,0,0,1382,1383,3,16,8,0,1383,103,1,0,0,0,1384,1385,5,5,0,0,1385,1386,
	3,16,8,0,1386,105,1,0,0,0,1387,1388,5,153,0,0,1388,1390,5,40,0,0,1389,1391,
	3,36,18,0,1390,1389,1,0,0,0,1391,1392,1,0,0,0,1392,1390,1,0,0,0,1392,1393,
	1,0,0,0,1393,107,1,0,0,0,1394,1395,5,109,0,0,1395,1397,5,40,0,0,1396,1398,
	3,36,18,0,1397,1396,1,0,0,0,1398,1399,1,0,0,0,1399,1397,1,0,0,0,1399,1400,
	1,0,0,0,1400,109,1,0,0,0,1401,1402,5,109,0,0,1402,1403,5,40,0,0,1403,1404,
	3,112,56,0,1404,111,1,0,0,0,1405,1407,3,36,18,0,1406,1408,3,92,46,0,1407,
	1406,1,0,0,0,1407,1408,1,0,0,0,1408,1416,1,0,0,0,1409,1410,5,5,0,0,1410,
	1412,3,36,18,0,1411,1413,3,92,46,0,1412,1411,1,0,0,0,1412,1413,1,0,0,0,
	1413,1415,1,0,0,0,1414,1409,1,0,0,0,1415,1418,1,0,0,0,1416,1414,1,0,0,0,
	1416,1417,1,0,0,0,1417,113,1,0,0,0,1418,1416,1,0,0,0,1419,1420,3,48,24,
	0,1420,115,1,0,0,0,1421,1422,3,48,24,0,1422,117,1,0,0,0,1423,1424,7,22,
	0,0,1424,119,1,0,0,0,1425,1426,5,188,0,0,1426,121,1,0,0,0,1427,1430,3,36,
	18,0,1428,1430,3,10,5,0,1429,1427,1,0,0,0,1429,1428,1,0,0,0,1430,123,1,
	0,0,0,1431,1432,7,23,0,0,1432,125,1,0,0,0,1433,1434,7,24,0,0,1434,127,1,
	0,0,0,1435,1436,3,174,87,0,1436,129,1,0,0,0,1437,1438,3,174,87,0,1438,131,
	1,0,0,0,1439,1440,3,174,87,0,1440,133,1,0,0,0,1441,1442,3,174,87,0,1442,
	135,1,0,0,0,1443,1444,3,174,87,0,1444,137,1,0,0,0,1445,1446,3,174,87,0,
	1446,139,1,0,0,0,1447,1448,3,174,87,0,1448,141,1,0,0,0,1449,1450,3,174,
	87,0,1450,143,1,0,0,0,1451,1452,3,174,87,0,1452,145,1,0,0,0,1453,1454,3,
	174,87,0,1454,147,1,0,0,0,1455,1456,3,174,87,0,1456,149,1,0,0,0,1457,1458,
	3,174,87,0,1458,151,1,0,0,0,1459,1460,3,174,87,0,1460,153,1,0,0,0,1461,
	1462,3,174,87,0,1462,155,1,0,0,0,1463,1464,3,174,87,0,1464,157,1,0,0,0,
	1465,1466,3,174,87,0,1466,159,1,0,0,0,1467,1468,3,174,87,0,1468,161,1,0,
	0,0,1469,1470,3,174,87,0,1470,163,1,0,0,0,1471,1472,3,174,87,0,1472,165,
	1,0,0,0,1473,1474,3,174,87,0,1474,167,1,0,0,0,1475,1476,3,174,87,0,1476,
	169,1,0,0,0,1477,1478,3,174,87,0,1478,171,1,0,0,0,1479,1480,3,174,87,0,
	1480,173,1,0,0,0,1481,1489,5,185,0,0,1482,1489,3,126,63,0,1483,1489,5,188,
	0,0,1484,1485,5,3,0,0,1485,1486,3,174,87,0,1486,1487,5,4,0,0,1487,1489,
	1,0,0,0,1488,1481,1,0,0,0,1488,1482,1,0,0,0,1488,1483,1,0,0,0,1488,1484,
	1,0,0,0,1489,175,1,0,0,0,198,179,187,194,199,205,211,213,218,222,226,229,
	233,239,244,253,260,266,270,274,279,285,297,301,306,309,312,315,319,322,
	336,343,350,352,355,361,366,374,379,394,400,410,415,425,429,431,435,440,
	442,450,456,461,470,475,486,491,502,507,511,527,537,542,550,562,567,580,
	585,594,601,605,609,612,620,633,636,644,653,657,662,692,704,709,721,727,
	734,738,748,751,757,763,772,775,779,781,783,792,804,815,824,828,836,840,
	843,849,853,858,865,874,878,880,884,893,898,900,913,916,919,924,928,931,
	938,943,952,957,960,968,972,980,983,985,994,997,999,1003,1007,1011,1014,
	1025,1030,1034,1038,1046,1054,1059,1066,1076,1085,1088,1097,1101,1109,1118,
	1121,1130,1133,1136,1139,1149,1151,1160,1169,1173,1180,1187,1191,1195,1204,
	1208,1212,1217,1221,1228,1238,1245,1250,1253,1257,1271,1283,1292,1301,1305,
	1315,1318,1327,1336,1339,1345,1359,1363,1374,1379,1392,1399,1407,1412,1416,
	1429,1488];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SQLiteParser.__ATN) {
			SQLiteParser.__ATN = new ATNDeserializer().deserialize(SQLiteParser._serializedATN);
		}

		return SQLiteParser.__ATN;
	}


	static DecisionsToDFA = SQLiteParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ParseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SQLiteParser.EOF, 0);
	}
	public sql_stmt_list_list(): Sql_stmt_listContext[] {
		return this.getTypedRuleContexts(Sql_stmt_listContext) as Sql_stmt_listContext[];
	}
	public sql_stmt_list(i: number): Sql_stmt_listContext {
		return this.getTypedRuleContext(Sql_stmt_listContext, i) as Sql_stmt_listContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_parse;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterParse) {
	 		listener.enterParse(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitParse) {
	 		listener.exitParse(this);
		}
	}
}


export class Sql_stmt_listContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sql_stmt_list(): Sql_stmtContext[] {
		return this.getTypedRuleContexts(Sql_stmtContext) as Sql_stmtContext[];
	}
	public sql_stmt(i: number): Sql_stmtContext {
		return this.getTypedRuleContext(Sql_stmtContext, i) as Sql_stmtContext;
	}
	public SCOL_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.SCOL);
	}
	public SCOL(i: number): TerminalNode {
		return this.getToken(SQLiteParser.SCOL, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_sql_stmt_list;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSql_stmt_list) {
	 		listener.enterSql_stmt_list(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSql_stmt_list) {
	 		listener.exitSql_stmt_list(this);
		}
	}
}


export class Sql_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public create_table_stmt(): Create_table_stmtContext {
		return this.getTypedRuleContext(Create_table_stmtContext, 0) as Create_table_stmtContext;
	}
	public create_view_stmt(): Create_view_stmtContext {
		return this.getTypedRuleContext(Create_view_stmtContext, 0) as Create_view_stmtContext;
	}
	public create_virtual_table_stmt(): Create_virtual_table_stmtContext {
		return this.getTypedRuleContext(Create_virtual_table_stmtContext, 0) as Create_virtual_table_stmtContext;
	}
	public EXPLAIN_(): TerminalNode {
		return this.getToken(SQLiteParser.EXPLAIN_, 0);
	}
	public QUERY_(): TerminalNode {
		return this.getToken(SQLiteParser.QUERY_, 0);
	}
	public PLAN_(): TerminalNode {
		return this.getToken(SQLiteParser.PLAN_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_sql_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSql_stmt) {
	 		listener.enterSql_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSql_stmt) {
	 		listener.exitSql_stmt(this);
		}
	}
}


export class Indexed_columnContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_name(): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, 0) as Column_nameContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public asc_desc(): Asc_descContext {
		return this.getTypedRuleContext(Asc_descContext, 0) as Asc_descContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_indexed_column;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterIndexed_column) {
	 		listener.enterIndexed_column(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitIndexed_column) {
	 		listener.exitIndexed_column(this);
		}
	}
}


export class Create_table_stmtContext extends ParserRuleContext {
	public _row_ROW_ID!: Token;
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.TABLE_, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_def_list(): Column_defContext[] {
		return this.getTypedRuleContexts(Column_defContext) as Column_defContext[];
	}
	public column_def(i: number): Column_defContext {
		return this.getTypedRuleContext(Column_defContext, i) as Column_defContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public TEMP_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMP_, 0);
	}
	public TEMPORARY_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMPORARY_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public table_constraint_list(): Table_constraintContext[] {
		return this.getTypedRuleContexts(Table_constraintContext) as Table_constraintContext[];
	}
	public table_constraint(i: number): Table_constraintContext {
		return this.getTypedRuleContext(Table_constraintContext, i) as Table_constraintContext;
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(SQLiteParser.WITHOUT_, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SQLiteParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_create_table_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCreate_table_stmt) {
	 		listener.enterCreate_table_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCreate_table_stmt) {
	 		listener.exitCreate_table_stmt(this);
		}
	}
}


export class Column_defContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_name(): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, 0) as Column_nameContext;
	}
	public type_name(): Type_nameContext {
		return this.getTypedRuleContext(Type_nameContext, 0) as Type_nameContext;
	}
	public column_constraint_list(): Column_constraintContext[] {
		return this.getTypedRuleContexts(Column_constraintContext) as Column_constraintContext[];
	}
	public column_constraint(i: number): Column_constraintContext {
		return this.getTypedRuleContext(Column_constraintContext, i) as Column_constraintContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_def;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_def) {
	 		listener.enterColumn_def(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_def) {
	 		listener.exitColumn_def(this);
		}
	}
}


export class Type_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public signed_number_list(): Signed_numberContext[] {
		return this.getTypedRuleContexts(Signed_numberContext) as Signed_numberContext[];
	}
	public signed_number(i: number): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, i) as Signed_numberContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_type_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterType_name) {
	 		listener.enterType_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitType_name) {
	 		listener.exitType_name(this);
		}
	}
}


export class Column_constraintContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHECK_(): TerminalNode {
		return this.getToken(SQLiteParser.CHECK_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public DEFAULT_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFAULT_, 0);
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public foreign_key_clause(): Foreign_key_clauseContext {
		return this.getTypedRuleContext(Foreign_key_clauseContext, 0) as Foreign_key_clauseContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public CONSTRAINT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONSTRAINT_, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public PRIMARY_(): TerminalNode {
		return this.getToken(SQLiteParser.PRIMARY_, 0);
	}
	public KEY_(): TerminalNode {
		return this.getToken(SQLiteParser.KEY_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(SQLiteParser.UNIQUE_, 0);
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public literal_value(): Literal_valueContext {
		return this.getTypedRuleContext(Literal_valueContext, 0) as Literal_valueContext;
	}
	public conflict_clause(): Conflict_clauseContext {
		return this.getTypedRuleContext(Conflict_clauseContext, 0) as Conflict_clauseContext;
	}
	public GENERATED_(): TerminalNode {
		return this.getToken(SQLiteParser.GENERATED_, 0);
	}
	public ALWAYS_(): TerminalNode {
		return this.getToken(SQLiteParser.ALWAYS_, 0);
	}
	public STORED_(): TerminalNode {
		return this.getToken(SQLiteParser.STORED_, 0);
	}
	public VIRTUAL_(): TerminalNode {
		return this.getToken(SQLiteParser.VIRTUAL_, 0);
	}
	public asc_desc(): Asc_descContext {
		return this.getTypedRuleContext(Asc_descContext, 0) as Asc_descContext;
	}
	public AUTOINCREMENT_(): TerminalNode {
		return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_constraint;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_constraint) {
	 		listener.enterColumn_constraint(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_constraint) {
	 		listener.exitColumn_constraint(this);
		}
	}
}


export class Signed_numberContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMERIC_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SQLiteParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SQLiteParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_signed_number;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSigned_number) {
	 		listener.enterSigned_number(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSigned_number) {
	 		listener.exitSigned_number(this);
		}
	}
}


export class Table_constraintContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public indexed_column_list(): Indexed_columnContext[] {
		return this.getTypedRuleContexts(Indexed_columnContext) as Indexed_columnContext[];
	}
	public indexed_column(i: number): Indexed_columnContext {
		return this.getTypedRuleContext(Indexed_columnContext, i) as Indexed_columnContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public CHECK_(): TerminalNode {
		return this.getToken(SQLiteParser.CHECK_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public FOREIGN_(): TerminalNode {
		return this.getToken(SQLiteParser.FOREIGN_, 0);
	}
	public KEY_(): TerminalNode {
		return this.getToken(SQLiteParser.KEY_, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public foreign_key_clause(): Foreign_key_clauseContext {
		return this.getTypedRuleContext(Foreign_key_clauseContext, 0) as Foreign_key_clauseContext;
	}
	public CONSTRAINT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONSTRAINT_, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public PRIMARY_(): TerminalNode {
		return this.getToken(SQLiteParser.PRIMARY_, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(SQLiteParser.UNIQUE_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public conflict_clause(): Conflict_clauseContext {
		return this.getTypedRuleContext(Conflict_clauseContext, 0) as Conflict_clauseContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_constraint;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_constraint) {
	 		listener.enterTable_constraint(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_constraint) {
	 		listener.exitTable_constraint(this);
		}
	}
}


export class Foreign_key_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REFERENCES_(): TerminalNode {
		return this.getToken(SQLiteParser.REFERENCES_, 0);
	}
	public foreign_table(): Foreign_tableContext {
		return this.getTypedRuleContext(Foreign_tableContext, 0) as Foreign_tableContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public ON__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.ON_);
	}
	public ON_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.ON_, i);
	}
	public MATCH__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.MATCH_);
	}
	public MATCH_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.MATCH_, i);
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public DEFERRABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRABLE_, 0);
	}
	public DELETE__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.DELETE_);
	}
	public DELETE_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.DELETE_, i);
	}
	public UPDATE__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.UPDATE_);
	}
	public UPDATE_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.UPDATE_, i);
	}
	public SET__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.SET_);
	}
	public SET_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.SET_, i);
	}
	public CASCADE__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.CASCADE_);
	}
	public CASCADE_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.CASCADE_, i);
	}
	public RESTRICT__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.RESTRICT_);
	}
	public RESTRICT_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.RESTRICT_, i);
	}
	public NO__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.NO_);
	}
	public NO_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.NO_, i);
	}
	public ACTION__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.ACTION_);
	}
	public ACTION_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.ACTION_, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public NULL__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.NULL_);
	}
	public NULL_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, i);
	}
	public DEFAULT__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.DEFAULT_);
	}
	public DEFAULT_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.DEFAULT_, i);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public INITIALLY_(): TerminalNode {
		return this.getToken(SQLiteParser.INITIALLY_, 0);
	}
	public DEFERRED_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRED_, 0);
	}
	public IMMEDIATE_(): TerminalNode {
		return this.getToken(SQLiteParser.IMMEDIATE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_foreign_key_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterForeign_key_clause) {
	 		listener.enterForeign_key_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitForeign_key_clause) {
	 		listener.exitForeign_key_clause(this);
		}
	}
}


export class Conflict_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public CONFLICT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONFLICT_, 0);
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(SQLiteParser.REPLACE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_conflict_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterConflict_clause) {
	 		listener.enterConflict_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitConflict_clause) {
	 		listener.exitConflict_clause(this);
		}
	}
}


export class Create_view_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(SQLiteParser.VIEW_, 0);
	}
	public view_name(): View_nameContext {
		return this.getTypedRuleContext(View_nameContext, 0) as View_nameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public TEMP_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMP_, 0);
	}
	public TEMPORARY_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMPORARY_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_create_view_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCreate_view_stmt) {
	 		listener.enterCreate_view_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCreate_view_stmt) {
	 		listener.exitCreate_view_stmt(this);
		}
	}
}


export class Create_virtual_table_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public VIRTUAL_(): TerminalNode {
		return this.getToken(SQLiteParser.VIRTUAL_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.TABLE_, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public USING_(): TerminalNode {
		return this.getToken(SQLiteParser.USING_, 0);
	}
	public module_name(): Module_nameContext {
		return this.getTypedRuleContext(Module_nameContext, 0) as Module_nameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public module_argument_list(): Module_argumentContext[] {
		return this.getTypedRuleContexts(Module_argumentContext) as Module_argumentContext[];
	}
	public module_argument(i: number): Module_argumentContext {
		return this.getTypedRuleContext(Module_argumentContext, i) as Module_argumentContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_create_virtual_table_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCreate_virtual_table_stmt) {
	 		listener.enterCreate_virtual_table_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCreate_virtual_table_stmt) {
	 		listener.exitCreate_virtual_table_stmt(this);
		}
	}
}


export class With_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH_(): TerminalNode {
		return this.getToken(SQLiteParser.WITH_, 0);
	}
	public cte_table_name_list(): Cte_table_nameContext[] {
		return this.getTypedRuleContexts(Cte_table_nameContext) as Cte_table_nameContext[];
	}
	public cte_table_name(i: number): Cte_table_nameContext {
		return this.getTypedRuleContext(Cte_table_nameContext, i) as Cte_table_nameContext;
	}
	public AS__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.AS_);
	}
	public AS_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.AS_, i);
	}
	public OPEN_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.OPEN_PAR);
	}
	public OPEN_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, i);
	}
	public select_stmt_list(): Select_stmtContext[] {
		return this.getTypedRuleContexts(Select_stmtContext) as Select_stmtContext[];
	}
	public select_stmt(i: number): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, i) as Select_stmtContext;
	}
	public CLOSE_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.CLOSE_PAR);
	}
	public CLOSE_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, i);
	}
	public RECURSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.RECURSIVE_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_with_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWith_clause) {
	 		listener.enterWith_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWith_clause) {
	 		listener.exitWith_clause(this);
		}
	}
}


export class Cte_table_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_cte_table_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCte_table_name) {
	 		listener.enterCte_table_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCte_table_name) {
	 		listener.exitCte_table_name(this);
		}
	}
}


export class Recursive_cteContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cte_table_name(): Cte_table_nameContext {
		return this.getTypedRuleContext(Cte_table_nameContext, 0) as Cte_table_nameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public initial_select(): Initial_selectContext {
		return this.getTypedRuleContext(Initial_selectContext, 0) as Initial_selectContext;
	}
	public UNION_(): TerminalNode {
		return this.getToken(SQLiteParser.UNION_, 0);
	}
	public recursive_select(): Recursive_selectContext {
		return this.getTypedRuleContext(Recursive_selectContext, 0) as Recursive_selectContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_recursive_cte;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterRecursive_cte) {
	 		listener.enterRecursive_cte(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitRecursive_cte) {
	 		listener.exitRecursive_cte(this);
		}
	}
}


export class Common_table_expressionContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public OPEN_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.OPEN_PAR);
	}
	public OPEN_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, i);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public CLOSE_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.CLOSE_PAR);
	}
	public CLOSE_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, i);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_common_table_expression;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCommon_table_expression) {
	 		listener.enterCommon_table_expression(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCommon_table_expression) {
	 		listener.exitCommon_table_expression(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_value(): Literal_valueContext {
		return this.getTypedRuleContext(Literal_valueContext, 0) as Literal_valueContext;
	}
	public BIND_PARAMETER(): TerminalNode {
		return this.getToken(SQLiteParser.BIND_PARAMETER, 0);
	}
	public column_name(): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, 0) as Column_nameContext;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(SQLiteParser.DOT, i);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public unary_operator(): Unary_operatorContext {
		return this.getTypedRuleContext(Unary_operatorContext, 0) as Unary_operatorContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public function_name(): Function_nameContext {
		return this.getTypedRuleContext(Function_nameContext, 0) as Function_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public filter_clause(): Filter_clauseContext {
		return this.getTypedRuleContext(Filter_clauseContext, 0) as Filter_clauseContext;
	}
	public over_clause(): Over_clauseContext {
		return this.getTypedRuleContext(Over_clauseContext, 0) as Over_clauseContext;
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(SQLiteParser.DISTINCT_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public CAST_(): TerminalNode {
		return this.getToken(SQLiteParser.CAST_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public type_name(): Type_nameContext {
		return this.getTypedRuleContext(Type_nameContext, 0) as Type_nameContext;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public CASE_(): TerminalNode {
		return this.getToken(SQLiteParser.CASE_, 0);
	}
	public END_(): TerminalNode {
		return this.getToken(SQLiteParser.END_, 0);
	}
	public WHEN__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.WHEN_);
	}
	public WHEN_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.WHEN_, i);
	}
	public THEN__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.THEN_);
	}
	public THEN_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.THEN_, i);
	}
	public ELSE_(): TerminalNode {
		return this.getToken(SQLiteParser.ELSE_, 0);
	}
	public raise_function(): Raise_functionContext {
		return this.getTypedRuleContext(Raise_functionContext, 0) as Raise_functionContext;
	}
	public PIPE2(): TerminalNode {
		return this.getToken(SQLiteParser.PIPE2, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(SQLiteParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(SQLiteParser.MOD, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SQLiteParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SQLiteParser.MINUS, 0);
	}
	public LT2(): TerminalNode {
		return this.getToken(SQLiteParser.LT2, 0);
	}
	public GT2(): TerminalNode {
		return this.getToken(SQLiteParser.GT2, 0);
	}
	public AMP(): TerminalNode {
		return this.getToken(SQLiteParser.AMP, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(SQLiteParser.PIPE, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(SQLiteParser.LT, 0);
	}
	public LT_EQ(): TerminalNode {
		return this.getToken(SQLiteParser.LT_EQ, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(SQLiteParser.GT, 0);
	}
	public GT_EQ(): TerminalNode {
		return this.getToken(SQLiteParser.GT_EQ, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SQLiteParser.ASSIGN, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(SQLiteParser.EQ, 0);
	}
	public NOT_EQ1(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_EQ1, 0);
	}
	public NOT_EQ2(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_EQ2, 0);
	}
	public IS_(): TerminalNode {
		return this.getToken(SQLiteParser.IS_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(SQLiteParser.IN_, 0);
	}
	public LIKE_(): TerminalNode {
		return this.getToken(SQLiteParser.LIKE_, 0);
	}
	public GLOB_(): TerminalNode {
		return this.getToken(SQLiteParser.GLOB_, 0);
	}
	public MATCH_(): TerminalNode {
		return this.getToken(SQLiteParser.MATCH_, 0);
	}
	public REGEXP_(): TerminalNode {
		return this.getToken(SQLiteParser.REGEXP_, 0);
	}
	public AND_(): TerminalNode {
		return this.getToken(SQLiteParser.AND_, 0);
	}
	public OR_(): TerminalNode {
		return this.getToken(SQLiteParser.OR_, 0);
	}
	public BETWEEN_(): TerminalNode {
		return this.getToken(SQLiteParser.BETWEEN_, 0);
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(SQLiteParser.ESCAPE_, 0);
	}
	public ISNULL_(): TerminalNode {
		return this.getToken(SQLiteParser.ISNULL_, 0);
	}
	public NOTNULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NOTNULL_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, 0);
	}
	public table_function_name(): Table_function_nameContext {
		return this.getTypedRuleContext(Table_function_nameContext, 0) as Table_function_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_expr;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}


export class Raise_functionContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RAISE_(): TerminalNode {
		return this.getToken(SQLiteParser.RAISE_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public error_message(): Error_messageContext {
		return this.getTypedRuleContext(Error_messageContext, 0) as Error_messageContext;
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_raise_function;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterRaise_function) {
	 		listener.enterRaise_function(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitRaise_function) {
	 		listener.exitRaise_function(this);
		}
	}
}


export class Literal_valueContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMERIC_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
	public BLOB_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.BLOB_LITERAL, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, 0);
	}
	public TRUE_(): TerminalNode {
		return this.getToken(SQLiteParser.TRUE_, 0);
	}
	public FALSE_(): TerminalNode {
		return this.getToken(SQLiteParser.FALSE_, 0);
	}
	public CURRENT_TIME_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
	}
	public CURRENT_DATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
	}
	public CURRENT_TIMESTAMP_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_literal_value;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterLiteral_value) {
	 		listener.enterLiteral_value(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitLiteral_value) {
	 		listener.exitLiteral_value(this);
		}
	}
}


export class Value_rowContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_value_row;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterValue_row) {
	 		listener.enterValue_row(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitValue_row) {
	 		listener.exitValue_row(this);
		}
	}
}


export class Values_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VALUES_(): TerminalNode {
		return this.getToken(SQLiteParser.VALUES_, 0);
	}
	public value_row_list(): Value_rowContext[] {
		return this.getTypedRuleContexts(Value_rowContext) as Value_rowContext[];
	}
	public value_row(i: number): Value_rowContext {
		return this.getTypedRuleContext(Value_rowContext, i) as Value_rowContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_values_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterValues_clause) {
	 		listener.enterValues_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitValues_clause) {
	 		listener.exitValues_clause(this);
		}
	}
}


export class Returning_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURNING_(): TerminalNode {
		return this.getToken(SQLiteParser.RETURNING_, 0);
	}
	public result_column_list(): Result_columnContext[] {
		return this.getTypedRuleContexts(Result_columnContext) as Result_columnContext[];
	}
	public result_column(i: number): Result_columnContext {
		return this.getTypedRuleContext(Result_columnContext, i) as Result_columnContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_returning_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterReturning_clause) {
	 		listener.enterReturning_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitReturning_clause) {
	 		listener.exitReturning_clause(this);
		}
	}
}


export class Select_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_core_list(): Select_coreContext[] {
		return this.getTypedRuleContexts(Select_coreContext) as Select_coreContext[];
	}
	public select_core(i: number): Select_coreContext {
		return this.getTypedRuleContext(Select_coreContext, i) as Select_coreContext;
	}
	public common_table_stmt(): Common_table_stmtContext {
		return this.getTypedRuleContext(Common_table_stmtContext, 0) as Common_table_stmtContext;
	}
	public compound_operator_list(): Compound_operatorContext[] {
		return this.getTypedRuleContexts(Compound_operatorContext) as Compound_operatorContext[];
	}
	public compound_operator(i: number): Compound_operatorContext {
		return this.getTypedRuleContext(Compound_operatorContext, i) as Compound_operatorContext;
	}
	public order_by_stmt(): Order_by_stmtContext {
		return this.getTypedRuleContext(Order_by_stmtContext, 0) as Order_by_stmtContext;
	}
	public limit_stmt(): Limit_stmtContext {
		return this.getTypedRuleContext(Limit_stmtContext, 0) as Limit_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_select_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSelect_stmt) {
	 		listener.enterSelect_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSelect_stmt) {
	 		listener.exitSelect_stmt(this);
		}
	}
}


export class Join_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_or_subquery_list(): Table_or_subqueryContext[] {
		return this.getTypedRuleContexts(Table_or_subqueryContext) as Table_or_subqueryContext[];
	}
	public table_or_subquery(i: number): Table_or_subqueryContext {
		return this.getTypedRuleContext(Table_or_subqueryContext, i) as Table_or_subqueryContext;
	}
	public join_operator_list(): Join_operatorContext[] {
		return this.getTypedRuleContexts(Join_operatorContext) as Join_operatorContext[];
	}
	public join_operator(i: number): Join_operatorContext {
		return this.getTypedRuleContext(Join_operatorContext, i) as Join_operatorContext;
	}
	public join_constraint_list(): Join_constraintContext[] {
		return this.getTypedRuleContexts(Join_constraintContext) as Join_constraintContext[];
	}
	public join_constraint(i: number): Join_constraintContext {
		return this.getTypedRuleContext(Join_constraintContext, i) as Join_constraintContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_join_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterJoin_clause) {
	 		listener.enterJoin_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitJoin_clause) {
	 		listener.exitJoin_clause(this);
		}
	}
}


export class Select_coreContext extends ParserRuleContext {
	public _whereExpr!: ExprContext;
	public _expr!: ExprContext;
	public _groupByExpr: ExprContext[] = [];
	public _havingExpr!: ExprContext;
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT_(): TerminalNode {
		return this.getToken(SQLiteParser.SELECT_, 0);
	}
	public result_column_list(): Result_columnContext[] {
		return this.getTypedRuleContexts(Result_columnContext) as Result_columnContext[];
	}
	public result_column(i: number): Result_columnContext {
		return this.getTypedRuleContext(Result_columnContext, i) as Result_columnContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public FROM_(): TerminalNode {
		return this.getToken(SQLiteParser.FROM_, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public GROUP_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUP_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public WINDOW_(): TerminalNode {
		return this.getToken(SQLiteParser.WINDOW_, 0);
	}
	public window_name_list(): Window_nameContext[] {
		return this.getTypedRuleContexts(Window_nameContext) as Window_nameContext[];
	}
	public window_name(i: number): Window_nameContext {
		return this.getTypedRuleContext(Window_nameContext, i) as Window_nameContext;
	}
	public AS__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.AS_);
	}
	public AS_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.AS_, i);
	}
	public window_defn_list(): Window_defnContext[] {
		return this.getTypedRuleContexts(Window_defnContext) as Window_defnContext[];
	}
	public window_defn(i: number): Window_defnContext {
		return this.getTypedRuleContext(Window_defnContext, i) as Window_defnContext;
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(SQLiteParser.DISTINCT_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public table_or_subquery_list(): Table_or_subqueryContext[] {
		return this.getTypedRuleContexts(Table_or_subqueryContext) as Table_or_subqueryContext[];
	}
	public table_or_subquery(i: number): Table_or_subqueryContext {
		return this.getTypedRuleContext(Table_or_subqueryContext, i) as Table_or_subqueryContext;
	}
	public join_clause(): Join_clauseContext {
		return this.getTypedRuleContext(Join_clauseContext, 0) as Join_clauseContext;
	}
	public HAVING_(): TerminalNode {
		return this.getToken(SQLiteParser.HAVING_, 0);
	}
	public values_clause(): Values_clauseContext {
		return this.getTypedRuleContext(Values_clauseContext, 0) as Values_clauseContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_select_core;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSelect_core) {
	 		listener.enterSelect_core(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSelect_core) {
	 		listener.exitSelect_core(this);
		}
	}
}


export class Table_or_subqueryContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public table_alias(): Table_aliasContext {
		return this.getTypedRuleContext(Table_aliasContext, 0) as Table_aliasContext;
	}
	public INDEXED_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEXED_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public index_name(): Index_nameContext {
		return this.getTypedRuleContext(Index_nameContext, 0) as Index_nameContext;
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public table_function_name(): Table_function_nameContext {
		return this.getTypedRuleContext(Table_function_nameContext, 0) as Table_function_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public table_or_subquery_list(): Table_or_subqueryContext[] {
		return this.getTypedRuleContexts(Table_or_subqueryContext) as Table_or_subqueryContext[];
	}
	public table_or_subquery(i: number): Table_or_subqueryContext {
		return this.getTypedRuleContext(Table_or_subqueryContext, i) as Table_or_subqueryContext;
	}
	public join_clause(): Join_clauseContext {
		return this.getTypedRuleContext(Join_clauseContext, 0) as Join_clauseContext;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_or_subquery;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_or_subquery) {
	 		listener.enterTable_or_subquery(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_or_subquery) {
	 		listener.exitTable_or_subquery(this);
		}
	}
}


export class Result_columnContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public column_alias(): Column_aliasContext {
		return this.getTypedRuleContext(Column_aliasContext, 0) as Column_aliasContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_result_column;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterResult_column) {
	 		listener.enterResult_column(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitResult_column) {
	 		listener.exitResult_column(this);
		}
	}
}


export class Join_operatorContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public JOIN_(): TerminalNode {
		return this.getToken(SQLiteParser.JOIN_, 0);
	}
	public NATURAL_(): TerminalNode {
		return this.getToken(SQLiteParser.NATURAL_, 0);
	}
	public LEFT_(): TerminalNode {
		return this.getToken(SQLiteParser.LEFT_, 0);
	}
	public INNER_(): TerminalNode {
		return this.getToken(SQLiteParser.INNER_, 0);
	}
	public CROSS_(): TerminalNode {
		return this.getToken(SQLiteParser.CROSS_, 0);
	}
	public OUTER_(): TerminalNode {
		return this.getToken(SQLiteParser.OUTER_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_join_operator;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterJoin_operator) {
	 		listener.enterJoin_operator(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitJoin_operator) {
	 		listener.exitJoin_operator(this);
		}
	}
}


export class Join_constraintContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public USING_(): TerminalNode {
		return this.getToken(SQLiteParser.USING_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_join_constraint;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterJoin_constraint) {
	 		listener.enterJoin_constraint(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitJoin_constraint) {
	 		listener.exitJoin_constraint(this);
		}
	}
}


export class Compound_operatorContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNION_(): TerminalNode {
		return this.getToken(SQLiteParser.UNION_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, 0);
	}
	public INTERSECT_(): TerminalNode {
		return this.getToken(SQLiteParser.INTERSECT_, 0);
	}
	public EXCEPT_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCEPT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_compound_operator;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCompound_operator) {
	 		listener.enterCompound_operator(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCompound_operator) {
	 		listener.exitCompound_operator(this);
		}
	}
}


export class Column_name_listContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_name_list;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_name_list) {
	 		listener.enterColumn_name_list(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_name_list) {
	 		listener.exitColumn_name_list(this);
		}
	}
}


export class Qualified_table_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public alias(): AliasContext {
		return this.getTypedRuleContext(AliasContext, 0) as AliasContext;
	}
	public INDEXED_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEXED_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public index_name(): Index_nameContext {
		return this.getTypedRuleContext(Index_nameContext, 0) as Index_nameContext;
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_qualified_table_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterQualified_table_name) {
	 		listener.enterQualified_table_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitQualified_table_name) {
	 		listener.exitQualified_table_name(this);
		}
	}
}


export class Filter_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTER_(): TerminalNode {
		return this.getToken(SQLiteParser.FILTER_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_filter_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFilter_clause) {
	 		listener.enterFilter_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFilter_clause) {
	 		listener.exitFilter_clause(this);
		}
	}
}


export class Window_defnContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public BY__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.BY_);
	}
	public BY_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.BY_, i);
	}
	public ordering_term_list(): Ordering_termContext[] {
		return this.getTypedRuleContexts(Ordering_termContext) as Ordering_termContext[];
	}
	public ordering_term(i: number): Ordering_termContext {
		return this.getTypedRuleContext(Ordering_termContext, i) as Ordering_termContext;
	}
	public base_window_name(): Base_window_nameContext {
		return this.getTypedRuleContext(Base_window_nameContext, 0) as Base_window_nameContext;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(SQLiteParser.PARTITION_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public frame_spec(): Frame_specContext {
		return this.getTypedRuleContext(Frame_specContext, 0) as Frame_specContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_window_defn;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWindow_defn) {
	 		listener.enterWindow_defn(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWindow_defn) {
	 		listener.exitWindow_defn(this);
		}
	}
}


export class Over_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OVER_(): TerminalNode {
		return this.getToken(SQLiteParser.OVER_, 0);
	}
	public window_name(): Window_nameContext {
		return this.getTypedRuleContext(Window_nameContext, 0) as Window_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public base_window_name(): Base_window_nameContext {
		return this.getTypedRuleContext(Base_window_nameContext, 0) as Base_window_nameContext;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(SQLiteParser.PARTITION_, 0);
	}
	public BY__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.BY_);
	}
	public BY_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.BY_, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public ordering_term_list(): Ordering_termContext[] {
		return this.getTypedRuleContexts(Ordering_termContext) as Ordering_termContext[];
	}
	public ordering_term(i: number): Ordering_termContext {
		return this.getTypedRuleContext(Ordering_termContext, i) as Ordering_termContext;
	}
	public frame_spec(): Frame_specContext {
		return this.getTypedRuleContext(Frame_specContext, 0) as Frame_specContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_over_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOver_clause) {
	 		listener.enterOver_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOver_clause) {
	 		listener.exitOver_clause(this);
		}
	}
}


export class Frame_specContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public frame_clause(): Frame_clauseContext {
		return this.getTypedRuleContext(Frame_clauseContext, 0) as Frame_clauseContext;
	}
	public EXCLUDE_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCLUDE_, 0);
	}
	public NO_(): TerminalNode {
		return this.getToken(SQLiteParser.NO_, 0);
	}
	public OTHERS_(): TerminalNode {
		return this.getToken(SQLiteParser.OTHERS_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public GROUP_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUP_, 0);
	}
	public TIES_(): TerminalNode {
		return this.getToken(SQLiteParser.TIES_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_spec;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_spec) {
	 		listener.enterFrame_spec(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_spec) {
	 		listener.exitFrame_spec(this);
		}
	}
}


export class Frame_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANGE_(): TerminalNode {
		return this.getToken(SQLiteParser.RANGE_, 0);
	}
	public ROWS_(): TerminalNode {
		return this.getToken(SQLiteParser.ROWS_, 0);
	}
	public GROUPS_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUPS_, 0);
	}
	public frame_single(): Frame_singleContext {
		return this.getTypedRuleContext(Frame_singleContext, 0) as Frame_singleContext;
	}
	public BETWEEN_(): TerminalNode {
		return this.getToken(SQLiteParser.BETWEEN_, 0);
	}
	public frame_left(): Frame_leftContext {
		return this.getTypedRuleContext(Frame_leftContext, 0) as Frame_leftContext;
	}
	public AND_(): TerminalNode {
		return this.getToken(SQLiteParser.AND_, 0);
	}
	public frame_right(): Frame_rightContext {
		return this.getTypedRuleContext(Frame_rightContext, 0) as Frame_rightContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_clause) {
	 		listener.enterFrame_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_clause) {
	 		listener.exitFrame_clause(this);
		}
	}
}


export class Simple_function_invocationContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_func(): Simple_funcContext {
		return this.getTypedRuleContext(Simple_funcContext, 0) as Simple_funcContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_simple_function_invocation;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSimple_function_invocation) {
	 		listener.enterSimple_function_invocation(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSimple_function_invocation) {
	 		listener.exitSimple_function_invocation(this);
		}
	}
}


export class Aggregate_function_invocationContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aggregate_func(): Aggregate_funcContext {
		return this.getTypedRuleContext(Aggregate_funcContext, 0) as Aggregate_funcContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public filter_clause(): Filter_clauseContext {
		return this.getTypedRuleContext(Filter_clauseContext, 0) as Filter_clauseContext;
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(SQLiteParser.DISTINCT_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_aggregate_function_invocation;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAggregate_function_invocation) {
	 		listener.enterAggregate_function_invocation(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAggregate_function_invocation) {
	 		listener.exitAggregate_function_invocation(this);
		}
	}
}


export class Window_function_invocationContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public window_function(): Window_functionContext {
		return this.getTypedRuleContext(Window_functionContext, 0) as Window_functionContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public OVER_(): TerminalNode {
		return this.getToken(SQLiteParser.OVER_, 0);
	}
	public window_defn(): Window_defnContext {
		return this.getTypedRuleContext(Window_defnContext, 0) as Window_defnContext;
	}
	public window_name(): Window_nameContext {
		return this.getTypedRuleContext(Window_nameContext, 0) as Window_nameContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public filter_clause(): Filter_clauseContext {
		return this.getTypedRuleContext(Filter_clauseContext, 0) as Filter_clauseContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_window_function_invocation;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWindow_function_invocation) {
	 		listener.enterWindow_function_invocation(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWindow_function_invocation) {
	 		listener.exitWindow_function_invocation(this);
		}
	}
}


export class Common_table_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH_(): TerminalNode {
		return this.getToken(SQLiteParser.WITH_, 0);
	}
	public common_table_expression_list(): Common_table_expressionContext[] {
		return this.getTypedRuleContexts(Common_table_expressionContext) as Common_table_expressionContext[];
	}
	public common_table_expression(i: number): Common_table_expressionContext {
		return this.getTypedRuleContext(Common_table_expressionContext, i) as Common_table_expressionContext;
	}
	public RECURSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.RECURSIVE_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_common_table_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCommon_table_stmt) {
	 		listener.enterCommon_table_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCommon_table_stmt) {
	 		listener.exitCommon_table_stmt(this);
		}
	}
}


export class Order_by_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public ordering_term_list(): Ordering_termContext[] {
		return this.getTypedRuleContexts(Ordering_termContext) as Ordering_termContext[];
	}
	public ordering_term(i: number): Ordering_termContext {
		return this.getTypedRuleContext(Ordering_termContext, i) as Ordering_termContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_order_by_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOrder_by_stmt) {
	 		listener.enterOrder_by_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOrder_by_stmt) {
	 		listener.exitOrder_by_stmt(this);
		}
	}
}


export class Limit_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIMIT_(): TerminalNode {
		return this.getToken(SQLiteParser.LIMIT_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public OFFSET_(): TerminalNode {
		return this.getToken(SQLiteParser.OFFSET_, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_limit_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterLimit_stmt) {
	 		listener.enterLimit_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitLimit_stmt) {
	 		listener.exitLimit_stmt(this);
		}
	}
}


export class Ordering_termContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public asc_desc(): Asc_descContext {
		return this.getTypedRuleContext(Asc_descContext, 0) as Asc_descContext;
	}
	public NULLS_(): TerminalNode {
		return this.getToken(SQLiteParser.NULLS_, 0);
	}
	public FIRST_(): TerminalNode {
		return this.getToken(SQLiteParser.FIRST_, 0);
	}
	public LAST_(): TerminalNode {
		return this.getToken(SQLiteParser.LAST_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_ordering_term;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOrdering_term) {
	 		listener.enterOrdering_term(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOrdering_term) {
	 		listener.exitOrdering_term(this);
		}
	}
}


export class Asc_descContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASC_(): TerminalNode {
		return this.getToken(SQLiteParser.ASC_, 0);
	}
	public DESC_(): TerminalNode {
		return this.getToken(SQLiteParser.DESC_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_asc_desc;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAsc_desc) {
	 		listener.enterAsc_desc(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAsc_desc) {
	 		listener.exitAsc_desc(this);
		}
	}
}


export class Frame_leftContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(SQLiteParser.PRECEDING_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(SQLiteParser.FOLLOWING_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(SQLiteParser.UNBOUNDED_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_left;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_left) {
	 		listener.enterFrame_left(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_left) {
	 		listener.exitFrame_left(this);
		}
	}
}


export class Frame_rightContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(SQLiteParser.PRECEDING_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(SQLiteParser.FOLLOWING_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(SQLiteParser.UNBOUNDED_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_right;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_right) {
	 		listener.enterFrame_right(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_right) {
	 		listener.exitFrame_right(this);
		}
	}
}


export class Frame_singleContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(SQLiteParser.PRECEDING_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(SQLiteParser.UNBOUNDED_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_single;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_single) {
	 		listener.enterFrame_single(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_single) {
	 		listener.exitFrame_single(this);
		}
	}
}


export class Window_functionContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.OPEN_PAR);
	}
	public OPEN_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, i);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CLOSE_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.CLOSE_PAR);
	}
	public CLOSE_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, i);
	}
	public OVER_(): TerminalNode {
		return this.getToken(SQLiteParser.OVER_, 0);
	}
	public order_by_expr_asc_desc(): Order_by_expr_asc_descContext {
		return this.getTypedRuleContext(Order_by_expr_asc_descContext, 0) as Order_by_expr_asc_descContext;
	}
	public FIRST_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.FIRST_VALUE_, 0);
	}
	public LAST_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.LAST_VALUE_, 0);
	}
	public partition_by(): Partition_byContext {
		return this.getTypedRuleContext(Partition_byContext, 0) as Partition_byContext;
	}
	public frame_clause(): Frame_clauseContext {
		return this.getTypedRuleContext(Frame_clauseContext, 0) as Frame_clauseContext;
	}
	public CUME_DIST_(): TerminalNode {
		return this.getToken(SQLiteParser.CUME_DIST_, 0);
	}
	public PERCENT_RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.PERCENT_RANK_, 0);
	}
	public order_by_expr(): Order_by_exprContext {
		return this.getTypedRuleContext(Order_by_exprContext, 0) as Order_by_exprContext;
	}
	public DENSE_RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.DENSE_RANK_, 0);
	}
	public RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.RANK_, 0);
	}
	public ROW_NUMBER_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_NUMBER_, 0);
	}
	public LAG_(): TerminalNode {
		return this.getToken(SQLiteParser.LAG_, 0);
	}
	public LEAD_(): TerminalNode {
		return this.getToken(SQLiteParser.LEAD_, 0);
	}
	public offset(): OffsetContext {
		return this.getTypedRuleContext(OffsetContext, 0) as OffsetContext;
	}
	public default_value(): Default_valueContext {
		return this.getTypedRuleContext(Default_valueContext, 0) as Default_valueContext;
	}
	public NTH_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.NTH_VALUE_, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public NTILE_(): TerminalNode {
		return this.getToken(SQLiteParser.NTILE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_window_function;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWindow_function) {
	 		listener.enterWindow_function(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWindow_function) {
	 		listener.exitWindow_function(this);
		}
	}
}


export class OffsetContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_offset;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOffset) {
	 		listener.enterOffset(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOffset) {
	 		listener.exitOffset(this);
		}
	}
}


export class Default_valueContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_default_value;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterDefault_value) {
	 		listener.enterDefault_value(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitDefault_value) {
	 		listener.exitDefault_value(this);
		}
	}
}


export class Partition_byContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(SQLiteParser.PARTITION_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_partition_by;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterPartition_by) {
	 		listener.enterPartition_by(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitPartition_by) {
	 		listener.exitPartition_by(this);
		}
	}
}


export class Order_by_exprContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_order_by_expr;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOrder_by_expr) {
	 		listener.enterOrder_by_expr(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOrder_by_expr) {
	 		listener.exitOrder_by_expr(this);
		}
	}
}


export class Order_by_expr_asc_descContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public expr_asc_desc(): Expr_asc_descContext {
		return this.getTypedRuleContext(Expr_asc_descContext, 0) as Expr_asc_descContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_order_by_expr_asc_desc;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOrder_by_expr_asc_desc) {
	 		listener.enterOrder_by_expr_asc_desc(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOrder_by_expr_asc_desc) {
	 		listener.exitOrder_by_expr_asc_desc(this);
		}
	}
}


export class Expr_asc_descContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public asc_desc_list(): Asc_descContext[] {
		return this.getTypedRuleContexts(Asc_descContext) as Asc_descContext[];
	}
	public asc_desc(i: number): Asc_descContext {
		return this.getTypedRuleContext(Asc_descContext, i) as Asc_descContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_expr_asc_desc;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterExpr_asc_desc) {
	 		listener.enterExpr_asc_desc(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitExpr_asc_desc) {
	 		listener.exitExpr_asc_desc(this);
		}
	}
}


export class Initial_selectContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_initial_select;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterInitial_select) {
	 		listener.enterInitial_select(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitInitial_select) {
	 		listener.exitInitial_select(this);
		}
	}
}


export class Recursive_selectContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_recursive_select;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterRecursive_select) {
	 		listener.enterRecursive_select(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitRecursive_select) {
	 		listener.exitRecursive_select(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(SQLiteParser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SQLiteParser.PLUS, 0);
	}
	public TILDE(): TerminalNode {
		return this.getToken(SQLiteParser.TILDE, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_unary_operator;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterUnary_operator) {
	 		listener.enterUnary_operator(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitUnary_operator) {
	 		listener.exitUnary_operator(this);
		}
	}
}


export class Error_messageContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_error_message;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterError_message) {
	 		listener.enterError_message(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitError_message) {
	 		listener.exitError_message(this);
		}
	}
}


export class Module_argumentContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public column_def(): Column_defContext {
		return this.getTypedRuleContext(Column_defContext, 0) as Column_defContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_module_argument;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterModule_argument) {
	 		listener.enterModule_argument(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitModule_argument) {
	 		listener.exitModule_argument(this);
		}
	}
}


export class Column_aliasContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SQLiteParser.IDENTIFIER, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_alias;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_alias) {
	 		listener.enterColumn_alias(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_alias) {
	 		listener.exitColumn_alias(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public ACTION_(): TerminalNode {
		return this.getToken(SQLiteParser.ACTION_, 0);
	}
	public ADD_(): TerminalNode {
		return this.getToken(SQLiteParser.ADD_, 0);
	}
	public AFTER_(): TerminalNode {
		return this.getToken(SQLiteParser.AFTER_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, 0);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(SQLiteParser.ALTER_, 0);
	}
	public ANALYZE_(): TerminalNode {
		return this.getToken(SQLiteParser.ANALYZE_, 0);
	}
	public AND_(): TerminalNode {
		return this.getToken(SQLiteParser.AND_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public ASC_(): TerminalNode {
		return this.getToken(SQLiteParser.ASC_, 0);
	}
	public ATTACH_(): TerminalNode {
		return this.getToken(SQLiteParser.ATTACH_, 0);
	}
	public AUTOINCREMENT_(): TerminalNode {
		return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
	}
	public BEFORE_(): TerminalNode {
		return this.getToken(SQLiteParser.BEFORE_, 0);
	}
	public BEGIN_(): TerminalNode {
		return this.getToken(SQLiteParser.BEGIN_, 0);
	}
	public BETWEEN_(): TerminalNode {
		return this.getToken(SQLiteParser.BETWEEN_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public CASCADE_(): TerminalNode {
		return this.getToken(SQLiteParser.CASCADE_, 0);
	}
	public CASE_(): TerminalNode {
		return this.getToken(SQLiteParser.CASE_, 0);
	}
	public CAST_(): TerminalNode {
		return this.getToken(SQLiteParser.CAST_, 0);
	}
	public CHECK_(): TerminalNode {
		return this.getToken(SQLiteParser.CHECK_, 0);
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(SQLiteParser.COLUMN_, 0);
	}
	public COMMIT_(): TerminalNode {
		return this.getToken(SQLiteParser.COMMIT_, 0);
	}
	public CONFLICT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONFLICT_, 0);
	}
	public CONSTRAINT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONSTRAINT_, 0);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public CROSS_(): TerminalNode {
		return this.getToken(SQLiteParser.CROSS_, 0);
	}
	public CURRENT_DATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
	}
	public CURRENT_TIME_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
	}
	public CURRENT_TIMESTAMP_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
	}
	public DATABASE_(): TerminalNode {
		return this.getToken(SQLiteParser.DATABASE_, 0);
	}
	public DEFAULT_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFAULT_, 0);
	}
	public DEFERRABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRABLE_, 0);
	}
	public DEFERRED_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRED_, 0);
	}
	public DELETE_(): TerminalNode {
		return this.getToken(SQLiteParser.DELETE_, 0);
	}
	public DESC_(): TerminalNode {
		return this.getToken(SQLiteParser.DESC_, 0);
	}
	public DETACH_(): TerminalNode {
		return this.getToken(SQLiteParser.DETACH_, 0);
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(SQLiteParser.DISTINCT_, 0);
	}
	public DROP_(): TerminalNode {
		return this.getToken(SQLiteParser.DROP_, 0);
	}
	public EACH_(): TerminalNode {
		return this.getToken(SQLiteParser.EACH_, 0);
	}
	public ELSE_(): TerminalNode {
		return this.getToken(SQLiteParser.ELSE_, 0);
	}
	public END_(): TerminalNode {
		return this.getToken(SQLiteParser.END_, 0);
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(SQLiteParser.ESCAPE_, 0);
	}
	public EXCEPT_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCEPT_, 0);
	}
	public EXCLUSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public EXPLAIN_(): TerminalNode {
		return this.getToken(SQLiteParser.EXPLAIN_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
	public FOR_(): TerminalNode {
		return this.getToken(SQLiteParser.FOR_, 0);
	}
	public FOREIGN_(): TerminalNode {
		return this.getToken(SQLiteParser.FOREIGN_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(SQLiteParser.FROM_, 0);
	}
	public FULL_(): TerminalNode {
		return this.getToken(SQLiteParser.FULL_, 0);
	}
	public GLOB_(): TerminalNode {
		return this.getToken(SQLiteParser.GLOB_, 0);
	}
	public GROUP_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUP_, 0);
	}
	public HAVING_(): TerminalNode {
		return this.getToken(SQLiteParser.HAVING_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public IMMEDIATE_(): TerminalNode {
		return this.getToken(SQLiteParser.IMMEDIATE_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(SQLiteParser.IN_, 0);
	}
	public INDEX_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEX_, 0);
	}
	public INDEXED_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEXED_, 0);
	}
	public INITIALLY_(): TerminalNode {
		return this.getToken(SQLiteParser.INITIALLY_, 0);
	}
	public INNER_(): TerminalNode {
		return this.getToken(SQLiteParser.INNER_, 0);
	}
	public INSERT_(): TerminalNode {
		return this.getToken(SQLiteParser.INSERT_, 0);
	}
	public INSTEAD_(): TerminalNode {
		return this.getToken(SQLiteParser.INSTEAD_, 0);
	}
	public INTERSECT_(): TerminalNode {
		return this.getToken(SQLiteParser.INTERSECT_, 0);
	}
	public INTO_(): TerminalNode {
		return this.getToken(SQLiteParser.INTO_, 0);
	}
	public IS_(): TerminalNode {
		return this.getToken(SQLiteParser.IS_, 0);
	}
	public ISNULL_(): TerminalNode {
		return this.getToken(SQLiteParser.ISNULL_, 0);
	}
	public JOIN_(): TerminalNode {
		return this.getToken(SQLiteParser.JOIN_, 0);
	}
	public KEY_(): TerminalNode {
		return this.getToken(SQLiteParser.KEY_, 0);
	}
	public LEFT_(): TerminalNode {
		return this.getToken(SQLiteParser.LEFT_, 0);
	}
	public LIKE_(): TerminalNode {
		return this.getToken(SQLiteParser.LIKE_, 0);
	}
	public LIMIT_(): TerminalNode {
		return this.getToken(SQLiteParser.LIMIT_, 0);
	}
	public MATCH_(): TerminalNode {
		return this.getToken(SQLiteParser.MATCH_, 0);
	}
	public NATURAL_(): TerminalNode {
		return this.getToken(SQLiteParser.NATURAL_, 0);
	}
	public NO_(): TerminalNode {
		return this.getToken(SQLiteParser.NO_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public NOTNULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NOTNULL_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, 0);
	}
	public OF_(): TerminalNode {
		return this.getToken(SQLiteParser.OF_, 0);
	}
	public OFFSET_(): TerminalNode {
		return this.getToken(SQLiteParser.OFFSET_, 0);
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public OR_(): TerminalNode {
		return this.getToken(SQLiteParser.OR_, 0);
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public OUTER_(): TerminalNode {
		return this.getToken(SQLiteParser.OUTER_, 0);
	}
	public PLAN_(): TerminalNode {
		return this.getToken(SQLiteParser.PLAN_, 0);
	}
	public PRAGMA_(): TerminalNode {
		return this.getToken(SQLiteParser.PRAGMA_, 0);
	}
	public PRIMARY_(): TerminalNode {
		return this.getToken(SQLiteParser.PRIMARY_, 0);
	}
	public QUERY_(): TerminalNode {
		return this.getToken(SQLiteParser.QUERY_, 0);
	}
	public RAISE_(): TerminalNode {
		return this.getToken(SQLiteParser.RAISE_, 0);
	}
	public RECURSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.RECURSIVE_, 0);
	}
	public REFERENCES_(): TerminalNode {
		return this.getToken(SQLiteParser.REFERENCES_, 0);
	}
	public REGEXP_(): TerminalNode {
		return this.getToken(SQLiteParser.REGEXP_, 0);
	}
	public REINDEX_(): TerminalNode {
		return this.getToken(SQLiteParser.REINDEX_, 0);
	}
	public RELEASE_(): TerminalNode {
		return this.getToken(SQLiteParser.RELEASE_, 0);
	}
	public RENAME_(): TerminalNode {
		return this.getToken(SQLiteParser.RENAME_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(SQLiteParser.REPLACE_, 0);
	}
	public RESTRICT_(): TerminalNode {
		return this.getToken(SQLiteParser.RESTRICT_, 0);
	}
	public RIGHT_(): TerminalNode {
		return this.getToken(SQLiteParser.RIGHT_, 0);
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public ROWS_(): TerminalNode {
		return this.getToken(SQLiteParser.ROWS_, 0);
	}
	public SAVEPOINT_(): TerminalNode {
		return this.getToken(SQLiteParser.SAVEPOINT_, 0);
	}
	public SELECT_(): TerminalNode {
		return this.getToken(SQLiteParser.SELECT_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(SQLiteParser.SET_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.TABLE_, 0);
	}
	public TEMP_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMP_, 0);
	}
	public TEMPORARY_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMPORARY_, 0);
	}
	public THEN_(): TerminalNode {
		return this.getToken(SQLiteParser.THEN_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(SQLiteParser.TO_, 0);
	}
	public TRANSACTION_(): TerminalNode {
		return this.getToken(SQLiteParser.TRANSACTION_, 0);
	}
	public TRIGGER_(): TerminalNode {
		return this.getToken(SQLiteParser.TRIGGER_, 0);
	}
	public UNION_(): TerminalNode {
		return this.getToken(SQLiteParser.UNION_, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(SQLiteParser.UNIQUE_, 0);
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(SQLiteParser.UPDATE_, 0);
	}
	public USING_(): TerminalNode {
		return this.getToken(SQLiteParser.USING_, 0);
	}
	public VACUUM_(): TerminalNode {
		return this.getToken(SQLiteParser.VACUUM_, 0);
	}
	public VALUES_(): TerminalNode {
		return this.getToken(SQLiteParser.VALUES_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(SQLiteParser.VIEW_, 0);
	}
	public VIRTUAL_(): TerminalNode {
		return this.getToken(SQLiteParser.VIRTUAL_, 0);
	}
	public WHEN_(): TerminalNode {
		return this.getToken(SQLiteParser.WHEN_, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public WITH_(): TerminalNode {
		return this.getToken(SQLiteParser.WITH_, 0);
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(SQLiteParser.WITHOUT_, 0);
	}
	public FIRST_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.FIRST_VALUE_, 0);
	}
	public OVER_(): TerminalNode {
		return this.getToken(SQLiteParser.OVER_, 0);
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(SQLiteParser.PARTITION_, 0);
	}
	public RANGE_(): TerminalNode {
		return this.getToken(SQLiteParser.RANGE_, 0);
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(SQLiteParser.PRECEDING_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(SQLiteParser.UNBOUNDED_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(SQLiteParser.FOLLOWING_, 0);
	}
	public CUME_DIST_(): TerminalNode {
		return this.getToken(SQLiteParser.CUME_DIST_, 0);
	}
	public DENSE_RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.DENSE_RANK_, 0);
	}
	public LAG_(): TerminalNode {
		return this.getToken(SQLiteParser.LAG_, 0);
	}
	public LAST_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.LAST_VALUE_, 0);
	}
	public LEAD_(): TerminalNode {
		return this.getToken(SQLiteParser.LEAD_, 0);
	}
	public NTH_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.NTH_VALUE_, 0);
	}
	public NTILE_(): TerminalNode {
		return this.getToken(SQLiteParser.NTILE_, 0);
	}
	public PERCENT_RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.PERCENT_RANK_, 0);
	}
	public RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.RANK_, 0);
	}
	public ROW_NUMBER_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_NUMBER_, 0);
	}
	public GENERATED_(): TerminalNode {
		return this.getToken(SQLiteParser.GENERATED_, 0);
	}
	public ALWAYS_(): TerminalNode {
		return this.getToken(SQLiteParser.ALWAYS_, 0);
	}
	public STORED_(): TerminalNode {
		return this.getToken(SQLiteParser.STORED_, 0);
	}
	public TRUE_(): TerminalNode {
		return this.getToken(SQLiteParser.TRUE_, 0);
	}
	public FALSE_(): TerminalNode {
		return this.getToken(SQLiteParser.FALSE_, 0);
	}
	public WINDOW_(): TerminalNode {
		return this.getToken(SQLiteParser.WINDOW_, 0);
	}
	public NULLS_(): TerminalNode {
		return this.getToken(SQLiteParser.NULLS_, 0);
	}
	public FIRST_(): TerminalNode {
		return this.getToken(SQLiteParser.FIRST_, 0);
	}
	public LAST_(): TerminalNode {
		return this.getToken(SQLiteParser.LAST_, 0);
	}
	public FILTER_(): TerminalNode {
		return this.getToken(SQLiteParser.FILTER_, 0);
	}
	public GROUPS_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUPS_, 0);
	}
	public EXCLUDE_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCLUDE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_keyword;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterName) {
	 		listener.enterName(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitName) {
	 		listener.exitName(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_function_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFunction_name) {
	 		listener.enterFunction_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFunction_name) {
	 		listener.exitFunction_name(this);
		}
	}
}


export class Schema_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_schema_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSchema_name) {
	 		listener.enterSchema_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSchema_name) {
	 		listener.exitSchema_name(this);
		}
	}
}


export class Table_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_name) {
	 		listener.enterTable_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_name) {
	 		listener.exitTable_name(this);
		}
	}
}


export class Table_or_index_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_or_index_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_or_index_name) {
	 		listener.enterTable_or_index_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_or_index_name) {
	 		listener.exitTable_or_index_name(this);
		}
	}
}


export class Column_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_name) {
	 		listener.enterColumn_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_name) {
	 		listener.exitColumn_name(this);
		}
	}
}


export class Collation_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_collation_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCollation_name) {
	 		listener.enterCollation_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCollation_name) {
	 		listener.exitCollation_name(this);
		}
	}
}


export class Foreign_tableContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_foreign_table;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterForeign_table) {
	 		listener.enterForeign_table(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitForeign_table) {
	 		listener.exitForeign_table(this);
		}
	}
}


export class Index_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_index_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterIndex_name) {
	 		listener.enterIndex_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitIndex_name) {
	 		listener.exitIndex_name(this);
		}
	}
}


export class Trigger_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_trigger_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTrigger_name) {
	 		listener.enterTrigger_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTrigger_name) {
	 		listener.exitTrigger_name(this);
		}
	}
}


export class View_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_view_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterView_name) {
	 		listener.enterView_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitView_name) {
	 		listener.exitView_name(this);
		}
	}
}


export class Module_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_module_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterModule_name) {
	 		listener.enterModule_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitModule_name) {
	 		listener.exitModule_name(this);
		}
	}
}


export class Pragma_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_pragma_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterPragma_name) {
	 		listener.enterPragma_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitPragma_name) {
	 		listener.exitPragma_name(this);
		}
	}
}


export class Savepoint_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_savepoint_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSavepoint_name) {
	 		listener.enterSavepoint_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSavepoint_name) {
	 		listener.exitSavepoint_name(this);
		}
	}
}


export class Table_aliasContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_alias;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_alias) {
	 		listener.enterTable_alias(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_alias) {
	 		listener.exitTable_alias(this);
		}
	}
}


export class Transaction_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_transaction_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTransaction_name) {
	 		listener.enterTransaction_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTransaction_name) {
	 		listener.exitTransaction_name(this);
		}
	}
}


export class Window_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_window_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWindow_name) {
	 		listener.enterWindow_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWindow_name) {
	 		listener.exitWindow_name(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_alias;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAlias) {
	 		listener.enterAlias(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAlias) {
	 		listener.exitAlias(this);
		}
	}
}


export class FilenameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_filename;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFilename) {
	 		listener.enterFilename(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFilename) {
	 		listener.exitFilename(this);
		}
	}
}


export class Base_window_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_base_window_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterBase_window_name) {
	 		listener.enterBase_window_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitBase_window_name) {
	 		listener.exitBase_window_name(this);
		}
	}
}


export class Simple_funcContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_simple_func;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSimple_func) {
	 		listener.enterSimple_func(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSimple_func) {
	 		listener.exitSimple_func(this);
		}
	}
}


export class Aggregate_funcContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_aggregate_func;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAggregate_func) {
	 		listener.enterAggregate_func(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAggregate_func) {
	 		listener.exitAggregate_func(this);
		}
	}
}


export class Table_function_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_function_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_function_name) {
	 		listener.enterTable_function_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_function_name) {
	 		listener.exitTable_function_name(this);
		}
	}
}


export class Any_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SQLiteParser.IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_any_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAny_name) {
	 		listener.enterAny_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAny_name) {
	 		listener.exitAny_name(this);
		}
	}
}
