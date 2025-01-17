interface Error {
    code?: string;
}
/**
 * Check whether an error object matches any of a set of Postgres error types.
 * @param err The error to check
 * @param types The Postgres error types to check against
 */
export declare function isDatabaseError(err: Error, ...types: (keyof typeof pgErrors)[]): boolean;
declare const pgErrors: {
    SuccessfulCompletion: string;
    Warning: string;
    NoData: string;
    SqlStatementNotYetComplete: string;
    ConnectionException: string;
    TriggeredActionException: string;
    FeatureNotSupported: string;
    InvalidTransactionInitiation: string;
    LocatorException: string;
    InvalidGrantor: string;
    InvalidRoleSpecification: string;
    DiagnosticsException: string;
    CaseNotFound: string;
    CardinalityViolation: string;
    DataException: string;
    IntegrityConstraintViolation: string;
    InvalidCursorState: string;
    InvalidTransactionState: string;
    InvalidSqlStatementName: string;
    TriggeredDataChangeViolation: string;
    InvalidAuthorizationSpecification: string;
    DependentPrivilegeDescriptorsStillExist: string;
    InvalidTransactionTermination: string;
    SqlRoutineException: string;
    InvalidCursorName: string;
    ExternalRoutineException: string;
    ExternalRoutineInvocationException: string;
    SavepointException: string;
    InvalidCatalogName: string;
    InvalidSchemaName: string;
    TransactionRollback: string;
    SyntaxErrorOrAccessRuleViolation: string;
    WithCheckOptionViolation: string;
    InsufficientResources: string;
    DiskFull: string;
    OutOfMemory: string;
    TooManyConnections: string;
    ConfigurationLimitExceeded: string;
    ProgramLimitExceeded: string;
    ObjectNotInPrerequisiteState: string;
    OperatorIntervention: string;
    SystemError: string;
    SnapshotTooOld: string;
    ConfigFileError: string;
    FdwError: string;
    PlpgsqlError: string;
    InternalError: string;
    SuccessfulCompletion_SuccessfulCompletion: string;
    Warning_Warning: string;
    Warning_NullValueEliminatedInSetFunction: string;
    Warning_StringDataRightTruncation: string;
    Warning_PrivilegeNotRevoked: string;
    Warning_PrivilegeNotGranted: string;
    Warning_ImplicitZeroBitPadding: string;
    Warning_DynamicResultSetsReturned: string;
    Warning_DeprecatedFeature: string;
    NoData_NoData: string;
    NoData_NoAdditionalDynamicResultSetsReturned: string;
    SqlStatementNotYetComplete_SqlStatementNotYetComplete: string;
    ConnectionException_ConnectionException: string;
    ConnectionException_SqlclientUnableToEstablishSqlconnection: string;
    ConnectionException_ConnectionDoesNotExist: string;
    ConnectionException_SqlserverRejectedEstablishmentOfSqlconnection: string;
    ConnectionException_ConnectionFailure: string;
    ConnectionException_TransactionResolutionUnknown: string;
    ConnectionException_ProtocolViolation: string;
    TriggeredActionException_TriggeredActionException: string;
    FeatureNotSupported_FeatureNotSupported: string;
    InvalidTransactionInitiation_InvalidTransactionInitiation: string;
    LocatorException_LocatorException: string;
    LocatorException_InvalidLocatorSpecification: string;
    InvalidGrantor_InvalidGrantor: string;
    InvalidGrantor_InvalidGrantOperation: string;
    InvalidRoleSpecification_InvalidRoleSpecification: string;
    DiagnosticsException_DiagnosticsException: string;
    DiagnosticsException_StackedDiagnosticsAccessedWithoutActiveHandler: string;
    CaseNotFound_CaseNotFound: string;
    CardinalityViolation_CardinalityViolation: string;
    DataException_DataException: string;
    DataException_StringDataRightTruncation: string;
    DataException_NullValueNoIndicatorParameter: string;
    DataException_NumericValueOutOfRange: string;
    DataException_NullValueNotAllowed: string;
    DataException_ErrorInAssignment: string;
    DataException_InvalidDatetimeFormat: string;
    DataException_DatetimeFieldOverflow: string;
    DataException_InvalidTimeZoneDisplacementValue: string;
    DataException_EscapeCharacterConflict: string;
    DataException_InvalidUseOfEscapeCharacter: string;
    DataException_InvalidEscapeOctet: string;
    DataException_ZeroLengthCharacterString: string;
    DataException_MostSpecificTypeMismatch: string;
    DataException_SequenceGeneratorLimitExceeded: string;
    DataException_NotAnXmlDocument: string;
    DataException_InvalidXmlDocument: string;
    DataException_InvalidXmlContent: string;
    DataException_InvalidXmlComment: string;
    DataException_InvalidXmlProcessingInstruction: string;
    DataException_InvalidIndicatorParameterValue: string;
    DataException_SubstringError: string;
    DataException_DivisionByZero: string;
    DataException_InvalidPrecedingOrFollowingSize: string;
    DataException_InvalidArgumentForNtileFunction: string;
    DataException_IntervalFieldOverflow: string;
    DataException_InvalidArgumentForNthValueFunction: string;
    DataException_InvalidCharacterValueForCast: string;
    DataException_InvalidEscapeCharacter: string;
    DataException_InvalidRegularExpression: string;
    DataException_InvalidArgumentForLogarithm: string;
    DataException_InvalidArgumentForPowerFunction: string;
    DataException_InvalidArgumentForWidthBucketFunction: string;
    DataException_InvalidRowCountInLimitClause: string;
    DataException_InvalidRowCountInResultOffsetClause: string;
    DataException_CharacterNotInRepertoire: string;
    DataException_IndicatorOverflow: string;
    DataException_InvalidParameterValue: string;
    DataException_UnterminatedCString: string;
    DataException_InvalidEscapeSequence: string;
    DataException_StringDataLengthMismatch: string;
    DataException_TrimError: string;
    DataException_ArraySubscriptError: string;
    DataException_InvalidTablesampleRepeat: string;
    DataException_InvalidTablesampleArgument: string;
    DataException_FloatingPointException: string;
    DataException_InvalidTextRepresentation: string;
    DataException_InvalidBinaryRepresentation: string;
    DataException_BadCopyFileFormat: string;
    DataException_UntranslatableCharacter: string;
    DataException_NonstandardUseOfEscapeCharacter: string;
    IntegrityConstraintViolation_IntegrityConstraintViolation: string;
    IntegrityConstraintViolation_RestrictViolation: string;
    IntegrityConstraintViolation_NotNullViolation: string;
    IntegrityConstraintViolation_ForeignKeyViolation: string;
    IntegrityConstraintViolation_UniqueViolation: string;
    IntegrityConstraintViolation_CheckViolation: string;
    IntegrityConstraintViolation_ExclusionViolation: string;
    InvalidCursorState_InvalidCursorState: string;
    InvalidTransactionState_InvalidTransactionState: string;
    InvalidTransactionState_ActiveSqlTransaction: string;
    InvalidTransactionState_BranchTransactionAlreadyActive: string;
    InvalidTransactionState_InappropriateAccessModeForBranchTransaction: string;
    InvalidTransactionState_InappropriateIsolationLevelForBranchTransaction: string;
    InvalidTransactionState_NoActiveSqlTransactionForBranchTransaction: string;
    InvalidTransactionState_ReadOnlySqlTransaction: string;
    InvalidTransactionState_SchemaAndDataStatementMixingNotSupported: string;
    InvalidTransactionState_HeldCursorRequiresSameIsolationLevel: string;
    InvalidTransactionState_NoActiveSqlTransaction: string;
    InvalidTransactionState_InFailedSqlTransaction: string;
    InvalidTransactionState_IdleInTransactionSessionTimeout: string;
    InvalidSqlStatementName_InvalidSqlStatementName: string;
    TriggeredDataChangeViolation_TriggeredDataChangeViolation: string;
    InvalidAuthorizationSpecification_InvalidAuthorizationSpecification: string;
    InvalidAuthorizationSpecification_InvalidPassword: string;
    DependentPrivilegeDescriptorsStillExist_DependentPrivilegeDescriptorsStillExist: string;
    DependentPrivilegeDescriptorsStillExist_DependentObjectsStillExist: string;
    InvalidTransactionTermination_InvalidTransactionTermination: string;
    SqlRoutineException_SqlRoutineException: string;
    SqlRoutineException_ModifyingSqlDataNotPermitted: string;
    SqlRoutineException_ProhibitedSqlStatementAttempted: string;
    SqlRoutineException_ReadingSqlDataNotPermitted: string;
    SqlRoutineException_FunctionExecutedNoReturnStatement: string;
    InvalidCursorName_InvalidCursorName: string;
    ExternalRoutineException_ExternalRoutineException: string;
    ExternalRoutineException_ContainingSqlNotPermitted: string;
    ExternalRoutineException_ModifyingSqlDataNotPermitted: string;
    ExternalRoutineException_ProhibitedSqlStatementAttempted: string;
    ExternalRoutineException_ReadingSqlDataNotPermitted: string;
    ExternalRoutineInvocationException_ExternalRoutineInvocationException: string;
    ExternalRoutineInvocationException_InvalidSqlstateReturned: string;
    ExternalRoutineInvocationException_NullValueNotAllowed: string;
    ExternalRoutineInvocationException_TriggerProtocolViolated: string;
    ExternalRoutineInvocationException_SrfProtocolViolated: string;
    ExternalRoutineInvocationException_EventTriggerProtocolViolated: string;
    SavepointException_SavepointException: string;
    SavepointException_InvalidSavepointSpecification: string;
    InvalidCatalogName_InvalidCatalogName: string;
    InvalidSchemaName_InvalidSchemaName: string;
    TransactionRollback_TransactionRollback: string;
    TransactionRollback_SerializationFailure: string;
    TransactionRollback_TransactionIntegrityConstraintViolation: string;
    TransactionRollback_StatementCompletionUnknown: string;
    TransactionRollback_DeadlockDetected: string;
    SyntaxErrorOrAccessRuleViolation_SyntaxErrorOrAccessRuleViolation: string;
    SyntaxErrorOrAccessRuleViolation_InsufficientPrivilege: string;
    SyntaxErrorOrAccessRuleViolation_SyntaxError: string;
    SyntaxErrorOrAccessRuleViolation_InvalidName: string;
    SyntaxErrorOrAccessRuleViolation_InvalidColumnDefinition: string;
    SyntaxErrorOrAccessRuleViolation_NameTooLong: string;
    SyntaxErrorOrAccessRuleViolation_DuplicateColumn: string;
    SyntaxErrorOrAccessRuleViolation_AmbiguousColumn: string;
    SyntaxErrorOrAccessRuleViolation_UndefinedColumn: string;
    SyntaxErrorOrAccessRuleViolation_UndefinedObject: string;
    SyntaxErrorOrAccessRuleViolation_DuplicateObject: string;
    SyntaxErrorOrAccessRuleViolation_DuplicateAlias: string;
    SyntaxErrorOrAccessRuleViolation_DuplicateFunction: string;
    SyntaxErrorOrAccessRuleViolation_AmbiguousFunction: string;
    SyntaxErrorOrAccessRuleViolation_GroupingError: string;
    SyntaxErrorOrAccessRuleViolation_DatatypeMismatch: string;
    SyntaxErrorOrAccessRuleViolation_WrongObjectType: string;
    SyntaxErrorOrAccessRuleViolation_InvalidForeignKey: string;
    SyntaxErrorOrAccessRuleViolation_CannotCoerce: string;
    SyntaxErrorOrAccessRuleViolation_UndefinedFunction: string;
    SyntaxErrorOrAccessRuleViolation_GeneratedAlways: string;
    SyntaxErrorOrAccessRuleViolation_ReservedName: string;
    SyntaxErrorOrAccessRuleViolation_UndefinedTable: string;
    SyntaxErrorOrAccessRuleViolation_UndefinedParameter: string;
    SyntaxErrorOrAccessRuleViolation_DuplicateCursor: string;
    SyntaxErrorOrAccessRuleViolation_DuplicateDatabase: string;
    SyntaxErrorOrAccessRuleViolation_DuplicatePreparedStatement: string;
    SyntaxErrorOrAccessRuleViolation_DuplicateSchema: string;
    SyntaxErrorOrAccessRuleViolation_DuplicateTable: string;
    SyntaxErrorOrAccessRuleViolation_AmbiguousParameter: string;
    SyntaxErrorOrAccessRuleViolation_AmbiguousAlias: string;
    SyntaxErrorOrAccessRuleViolation_InvalidColumnReference: string;
    SyntaxErrorOrAccessRuleViolation_InvalidCursorDefinition: string;
    SyntaxErrorOrAccessRuleViolation_InvalidDatabaseDefinition: string;
    SyntaxErrorOrAccessRuleViolation_InvalidFunctionDefinition: string;
    SyntaxErrorOrAccessRuleViolation_InvalidPreparedStatementDefinition: string;
    SyntaxErrorOrAccessRuleViolation_InvalidSchemaDefinition: string;
    SyntaxErrorOrAccessRuleViolation_InvalidTableDefinition: string;
    SyntaxErrorOrAccessRuleViolation_InvalidObjectDefinition: string;
    SyntaxErrorOrAccessRuleViolation_IndeterminateDatatype: string;
    SyntaxErrorOrAccessRuleViolation_InvalidRecursion: string;
    SyntaxErrorOrAccessRuleViolation_WindowingError: string;
    SyntaxErrorOrAccessRuleViolation_CollationMismatch: string;
    SyntaxErrorOrAccessRuleViolation_IndeterminateCollation: string;
    WithCheckOptionViolation_WithCheckOptionViolation: string;
    InsufficientResources_InsufficientResources: string;
    InsufficientResources_DiskFull: string;
    InsufficientResources_OutOfMemory: string;
    InsufficientResources_TooManyConnections: string;
    InsufficientResources_ConfigurationLimitExceeded: string;
    ProgramLimitExceeded_ProgramLimitExceeded: string;
    ProgramLimitExceeded_StatementTooComplex: string;
    ProgramLimitExceeded_TooManyColumns: string;
    ProgramLimitExceeded_TooManyArguments: string;
    ObjectNotInPrerequisiteState_ObjectNotInPrerequisiteState: string;
    ObjectNotInPrerequisiteState_ObjectInUse: string;
    ObjectNotInPrerequisiteState_CantChangeRuntimeParam: string;
    ObjectNotInPrerequisiteState_LockNotAvailable: string;
    OperatorIntervention_OperatorIntervention: string;
    OperatorIntervention_QueryCanceled: string;
    OperatorIntervention_AdminShutdown: string;
    OperatorIntervention_CrashShutdown: string;
    OperatorIntervention_CannotConnectNow: string;
    OperatorIntervention_DatabaseDropped: string;
    SystemError_SystemError: string;
    SystemError_IoError: string;
    SystemError_UndefinedFile: string;
    SystemError_DuplicateFile: string;
    SnapshotTooOld_SnapshotTooOld: string;
    ConfigFileError_ConfigFileError: string;
    ConfigFileError_LockFileExists: string;
    FdwError_FdwError: string;
    FdwError_FdwOutOfMemory: string;
    FdwError_FdwDynamicParameterValueNeeded: string;
    FdwError_FdwInvalidDataType: string;
    FdwError_FdwColumnNameNotFound: string;
    FdwError_FdwInvalidDataTypeDescriptors: string;
    FdwError_FdwInvalidColumnName: string;
    FdwError_FdwInvalidColumnNumber: string;
    FdwError_FdwInvalidUseOfNullPointer: string;
    FdwError_FdwInvalidStringFormat: string;
    FdwError_FdwInvalidHandle: string;
    FdwError_FdwInvalidOptionIndex: string;
    FdwError_FdwInvalidOptionName: string;
    FdwError_FdwOptionNameNotFound: string;
    FdwError_FdwReplyHandle: string;
    FdwError_FdwUnableToCreateExecution: string;
    FdwError_FdwUnableToCreateReply: string;
    FdwError_FdwUnableToEstablishConnection: string;
    FdwError_FdwNoSchemas: string;
    FdwError_FdwSchemaNotFound: string;
    FdwError_FdwTableNotFound: string;
    FdwError_FdwFunctionSequenceError: string;
    FdwError_FdwTooManyHandles: string;
    FdwError_FdwInconsistentDescriptorInformation: string;
    FdwError_FdwInvalidAttributeValue: string;
    FdwError_FdwInvalidStringLengthOrBufferLength: string;
    FdwError_FdwInvalidDescriptorFieldIdentifier: string;
    PlpgsqlError_PlpgsqlError: string;
    PlpgsqlError_RaiseException: string;
    PlpgsqlError_NoDataFound: string;
    PlpgsqlError_TooManyRows: string;
    PlpgsqlError_AssertFailure: string;
    InternalError_InternalError: string;
    InternalError_DataCorrupted: string;
    InternalError_IndexCorrupted: string;
};
export {};
