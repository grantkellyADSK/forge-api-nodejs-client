/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function () {
	'use strict';

	var ApiClient = require('./ApiClient'),
		BadInput = require('./model/BadInput'),
		BaseAttributesCreatedUpdated = require('./model/BaseAttributesCreatedUpdated'),
		BaseAttributesCreatedUpdatedAttributes = require('./model/BaseAttributesCreatedUpdatedAttributes'),
		BaseAttributesExtensionObject = require('./model/BaseAttributesExtensionObject'),
		BaseAttributesExtensionObjectWithoutSchemaLink = require('./model/BaseAttributesExtensionObjectWithoutSchemaLink'),
		Bucket = require('./model/Bucket'),
		BucketObjects = require('./model/BucketObjects'),
		Buckets = require('./model/Buckets'),
		BucketsItems = require('./model/BucketsItems'),
		Conflict = require('./model/Conflict'),
		CreateItem = require('./model/CreateItem'),
		CreateItemData = require('./model/CreateItemData'),
		CreateItemDataRelationships = require('./model/CreateItemDataRelationships'),
		CreateItemDataRelationshipsTip = require('./model/CreateItemDataRelationshipsTip'),
		CreateItemDataRelationshipsTipData = require('./model/CreateItemDataRelationshipsTipData'),
		CreateItemIncluded = require('./model/CreateItemIncluded'),
		CreateItemRelationships = require('./model/CreateItemRelationships'),
		CreateItemRelationshipsStorage = require('./model/CreateItemRelationshipsStorage'),
		CreateItemRelationshipsStorageData = require('./model/CreateItemRelationshipsStorageData'),
		CreateRef = require('./model/CreateRef'),
		CreateRefData = require('./model/CreateRefData'),
		CreateRefDataMeta = require('./model/CreateRefDataMeta'),
		CreateStorage = require('./model/CreateStorage'),
		CreateStorageData = require('./model/CreateStorageData'),
		CreateStorageDataAttributes = require('./model/CreateStorageDataAttributes'),
		CreateStorageDataRelationships = require('./model/CreateStorageDataRelationships'),
		CreateStorageDataRelationshipsTarget = require('./model/CreateStorageDataRelationshipsTarget'),
		CreateVersion = require('./model/CreateVersion'),
		CreateVersionData = require('./model/CreateVersionData'),
		CreateVersionDataRelationships = require('./model/CreateVersionDataRelationships'),
		CreateVersionDataRelationshipsItem = require('./model/CreateVersionDataRelationshipsItem'),
		CreateVersionDataRelationshipsItemData = require('./model/CreateVersionDataRelationshipsItemData'),
		Diagnostics = require('./model/Diagnostics'),
		Folder = require('./model/Folder'),
		FolderAttributes = require('./model/FolderAttributes'),
		FolderRelationships = require('./model/FolderRelationships'),
		Forbidden = require('./model/Forbidden'),
		Formats = require('./model/Formats'),
		FormatsFormats = require('./model/FormatsFormats'),
		Hub = require('./model/Hub'),
		HubAttributes = require('./model/HubAttributes'),
		HubRelationships = require('./model/HubRelationships'),
		Hubs = require('./model/Hubs'),
		Item = require('./model/Item'),
		ItemAttributes = require('./model/ItemAttributes'),
		ItemCreated = require('./model/ItemCreated'),
		ItemRelationships = require('./model/ItemRelationships'),
		Job = require('./model/Job'),
		JobAcceptedJobs = require('./model/JobAcceptedJobs'),
		JobDwgOutputPayload = require('./model/JobDwgOutputPayload'),
		JobDwgOutputPayloadAdvanced = require('./model/JobDwgOutputPayloadAdvanced'),
		JobIfcOutputPayload = require('./model/JobIfcOutputPayload'),
		JobIfcOutputPayloadAdvanced = require('./model/JobIfcOutputPayloadAdvanced'),
		JobIgesOutputPayload = require('./model/JobIgesOutputPayload'),
		JobIgesOutputPayloadAdvanced = require('./model/JobIgesOutputPayloadAdvanced'),
		JobObjOutputPayload = require('./model/JobObjOutputPayload'),
		JobObjOutputPayloadAdvanced = require('./model/JobObjOutputPayloadAdvanced'),
		JobPayload = require('./model/JobPayload'),
		JobPayloadInput = require('./model/JobPayloadInput'),
		JobPayloadItem = require('./model/JobPayloadItem'),
		JobPayloadOutput = require('./model/JobPayloadOutput'),
		JobPayloadMisc = require('./model/JobPayloadMisc'),
		JobPayloadDestination = require('./model/JobPayloadDestination'),
		JobStepOutputPayload = require('./model/JobStepOutputPayload'),
		JobStepOutputPayloadAdvanced = require('./model/JobStepOutputPayloadAdvanced'),
		JobStlOutputPayload = require('./model/JobStlOutputPayload'),
		JobStlOutputPayloadAdvanced = require('./model/JobStlOutputPayloadAdvanced'),
		JobSvfOutputPayload = require('./model/JobSvfOutputPayload'),
		JobSvfOutputPayloadAdvanced = require('./model/JobSvfOutputPayloadAdvanced'),
		JobSvf2OutputPayload = require('./model/JobSvf2OutputPayload'),
		JobSvf2OutputPayloadAdvanced = require('./model/JobSvf2OutputPayloadAdvanced'),
		JobThumbnailOutputPayload = require('./model/JobThumbnailOutputPayload'),
		JobThumbnailOutputPayloadAdvanced = require('./model/JobThumbnailOutputPayloadAdvanced'),
		JsonApiAttributes = require('./model/JsonApiAttributes'),
		JsonApiCollection = require('./model/JsonApiCollection'),
		JsonApiDocument = require('./model/JsonApiDocument'),
		JsonApiDocumentBase = require('./model/JsonApiDocumentBase'),
		JsonApiError = require('./model/JsonApiError'),
		JsonApiErrorErrors = require('./model/JsonApiErrorErrors'),
		JsonApiErrorLinks = require('./model/JsonApiErrorLinks'),
		JsonApiLink = require('./model/JsonApiLink'),
		JsonApiLinks = require('./model/JsonApiLinks'),
		JsonApiLinksPaging = require('./model/JsonApiLinksPaging'),
		JsonApiLinksRelated = require('./model/JsonApiLinksRelated'),
		JsonApiLinksSelf = require('./model/JsonApiLinksSelf'),
		JsonApiMeta = require('./model/JsonApiMeta'),
		JsonApiMetaLink = require('./model/JsonApiMetaLink'),
		JsonApiRelationships = require('./model/JsonApiRelationships'),
		JsonApiRelationshipsLinksExternalResource = require('./model/JsonApiRelationshipsLinksExternalResource'),
		JsonApiRelationshipsLinksInternal = require('./model/JsonApiRelationshipsLinksInternal'),
		JsonApiRelationshipsLinksInternalResource = require('./model/JsonApiRelationshipsLinksInternalResource'),
		JsonApiRelationshipsLinksRefs = require('./model/JsonApiRelationshipsLinksRefs'),
		JsonApiRelationshipsLinksRefsLinks = require('./model/JsonApiRelationshipsLinksRefsLinks'),
		JsonApiResource = require('./model/JsonApiResource'),
		JsonApiTypeId = require('./model/JsonApiTypeId'),
		JsonApiVersion = require('./model/JsonApiVersion'),
		JsonApiVersionJsonapi = require('./model/JsonApiVersionJsonapi'),
		Manifest = require('./model/Manifest'),
		ManifestChildren = require('./model/ManifestChildren'),
		ManifestDerivative = require('./model/ManifestDerivative'),
		Message = require('./model/Message'),
		Messages = require('./model/Messages'),
		Metadata = require('./model/Metadata'),
		MetadataCollection = require('./model/MetadataCollection'),
		MetadataData = require('./model/MetadataData'),
		MetadataMetadata = require('./model/MetadataMetadata'),
		MetadataObject = require('./model/MetadataObject'),
		NotFound = require('./model/NotFound'),
		ObjectDetails = require('./model/ObjectDetails'),
		ObjectFullDetails = require('./model/ObjectFullDetails'),
		ObjectFullDetailsDeltas = require('./model/ObjectFullDetailsDeltas'),
		ObjectS3Download = require('./model/ObjectS3Download'),
		ObjectS3Upload = require('./model/ObjectS3Upload'),
		Permission = require('./model/Permission'),
		PostBucketsPayload = require('./model/PostBucketsPayload'),
		PostBucketsPayloadAllow = require('./model/PostBucketsPayloadAllow'),
		PostBucketsSigned = require('./model/PostBucketsSigned'),
		PostObjectSigned = require('./model/PostObjectSigned'),
		Project = require('./model/Project'),
		ProjectAttributes = require('./model/ProjectAttributes'),
		ProjectRelationships = require('./model/ProjectRelationships'),
		Projects = require('./model/Projects'),
		Reason = require('./model/Reason'),
		Refs = require('./model/Refs'),
		RelRef = require('./model/RelRef'),
		RelRefMeta = require('./model/RelRefMeta'),
		ResourceId = require('./model/ResourceId'),
		Result = require('./model/Result'),
		Storage = require('./model/Storage'),
		StorageCreated = require('./model/StorageCreated'),
		StorageRelationships = require('./model/StorageRelationships'),
		StorageRelationshipsTarget = require('./model/StorageRelationshipsTarget'),
		StorageRelationshipsTargetData = require('./model/StorageRelationshipsTargetData'),
		TopFolders = require('./model/TopFolders'),
		UserProfile = require('./model/UserProfile'),
		UserProfileProfileImages = require('./model/UserProfileProfileImages'),
		Version = require('./model/Version'),
		VersionAttributes = require('./model/VersionAttributes'),
		VersionCreated = require('./model/VersionCreated'),
		VersionRelationships = require('./model/VersionRelationships'),
		Versions = require('./model/Versions'),
		BucketsApi = require('./api/BucketsApi'),
		CommandsApi = require('./api/CommandsApi'),
		DerivativesApi = require('./api/DerivativesApi'),
		FoldersApi = require('./api/FoldersApi'),
		HubsApi = require('./api/HubsApi'),
		ItemsApi = require('./api/ItemsApi'),
		ObjectsApi = require('./api/ObjectsApi'),
		ProjectsApi = require('./api/ProjectsApi'),
		UserProfileApi = require('./api/UserProfileApi'),
		VersionsApi = require('./api/VersionsApi'),
		WebhooksApi = require('./api/WebhooksApi'),
		TokensApi = require('./api/TokensApi'),
		authClientTwoLegged = require('./auth/OAuth2TwoLegged'),
		authClientThreeLegged = require('./auth/OAuth2ThreeLegged');

	/**
	 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering..<br>
	 * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
	 * <p>
	 * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
	 * <pre>
	 * var ForgeSdk = require('index'); // See note below*.
	 * var xxxSvc = new ForgeSdk.XxxApi(); // Allocate the API class we're going to use.
	 * var yyyModel = new ForgeSdk.Yyy(); // Construct a model instance.
	 * yyyModel.someProperty = 'someValue';
	 * ...
	 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
	 * ...
	 * </pre>
	 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
	 * and put the application logic within the callback function.</em>
	 * </p>
	 * <p>
	 * A non-AMD browser application (discouraged) might do something like this:
	 * <pre>
	 * var xxxSvc = new ForgeSdk.XxxApi(); // Allocate the API class we're going to use.
	 * var yyy = new ForgeSdk.Yyy(); // Construct a model instance.
	 * yyyModel.someProperty = 'someValue';
	 * ...
	 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
	 * ...
	 * </pre>
	 * </p>
	 * @module index
	 */
	var exports = {
		/**
		 * The ApiClient constructor.
		 * @property {module:ApiClient}
		 */
		ApiClient: ApiClient,
		/**
		 * The BadInput model constructor.
		 * @property {module:model/BadInput}
		 */
		BadInput: BadInput,
		/**
		 * The BaseAttributesCreatedUpdated model constructor.
		 * @property {module:model/BaseAttributesCreatedUpdated}
		 */
		BaseAttributesCreatedUpdated: BaseAttributesCreatedUpdated,
		/**
		 * The BaseAttributesCreatedUpdatedAttributes model constructor.
		 * @property {module:model/BaseAttributesCreatedUpdatedAttributes}
		 */
		BaseAttributesCreatedUpdatedAttributes: BaseAttributesCreatedUpdatedAttributes,
		/**
		 * The BaseAttributesExtensionObject model constructor.
		 * @property {module:model/BaseAttributesExtensionObject}
		 */
		BaseAttributesExtensionObject: BaseAttributesExtensionObject,
		/**
		 * The BaseAttributesExtensionObjectWithoutSchemaLink model constructor.
		 * @property {module:model/BaseAttributesExtensionObjectWithoutSchemaLink}
		 */
		BaseAttributesExtensionObjectWithoutSchemaLink: BaseAttributesExtensionObjectWithoutSchemaLink,
		/**
		 * The Bucket model constructor.
		 * @property {module:model/Bucket}
		 */
		Bucket: Bucket,
		/**
		 * The BucketObjects model constructor.
		 * @property {module:model/BucketObjects}
		 */
		BucketObjects: BucketObjects,
		/**
		 * The Buckets model constructor.
		 * @property {module:model/Buckets}
		 */
		Buckets: Buckets,
		/**
		 * The BucketsItems model constructor.
		 * @property {module:model/BucketsItems}
		 */
		BucketsItems: BucketsItems,
		/**
		 * The Conflict model constructor.
		 * @property {module:model/Conflict}
		 */
		Conflict: Conflict,
		/**
		 * The CreateItem model constructor.
		 * @property {module:model/CreateItem}
		 */
		CreateItem: CreateItem,
		/**
		 * The CreateItemData model constructor.
		 * @property {module:model/CreateItemData}
		 */
		CreateItemData: CreateItemData,
		/**
		 * The CreateItemDataRelationships model constructor.
		 * @property {module:model/CreateItemDataRelationships}
		 */
		CreateItemDataRelationships: CreateItemDataRelationships,
		/**
		 * The CreateItemDataRelationshipsTip model constructor.
		 * @property {module:model/CreateItemDataRelationshipsTip}
		 */
		CreateItemDataRelationshipsTip: CreateItemDataRelationshipsTip,
		/**
		 * The CreateItemDataRelationshipsTipData model constructor.
		 * @property {module:model/CreateItemDataRelationshipsTipData}
		 */
		CreateItemDataRelationshipsTipData: CreateItemDataRelationshipsTipData,
		/**
		 * The CreateItemIncluded model constructor.
		 * @property {module:model/CreateItemIncluded}
		 */
		CreateItemIncluded: CreateItemIncluded,
		/**
		 * The CreateItemRelationships model constructor.
		 * @property {module:model/CreateItemRelationships}
		 */
		CreateItemRelationships: CreateItemRelationships,
		/**
		 * The CreateItemRelationshipsStorage model constructor.
		 * @property {module:model/CreateItemRelationshipsStorage}
		 */
		CreateItemRelationshipsStorage: CreateItemRelationshipsStorage,
		/**
		 * The CreateItemRelationshipsStorageData model constructor.
		 * @property {module:model/CreateItemRelationshipsStorageData}
		 */
		CreateItemRelationshipsStorageData: CreateItemRelationshipsStorageData,
		/**
		 * The CreateRef model constructor.
		 * @property {module:model/CreateRef}
		 */
		CreateRef: CreateRef,
		/**
		 * The CreateRefData model constructor.
		 * @property {module:model/CreateRefData}
		 */
		CreateRefData: CreateRefData,
		/**
		 * The CreateRefDataMeta model constructor.
		 * @property {module:model/CreateRefDataMeta}
		 */
		CreateRefDataMeta: CreateRefDataMeta,
		/**
		 * The CreateStorage model constructor.
		 * @property {module:model/CreateStorage}
		 */
		CreateStorage: CreateStorage,
		/**
		 * The CreateStorageData model constructor.
		 * @property {module:model/CreateStorageData}
		 */
		CreateStorageData: CreateStorageData,
		/**
		 * The CreateStorageDataAttributes model constructor.
		 * @property {module:model/CreateStorageDataAttributes}
		 */
		CreateStorageDataAttributes: CreateStorageDataAttributes,
		/**
		 * The CreateStorageDataRelationships model constructor.
		 * @property {module:model/CreateStorageDataRelationships}
		 */
		CreateStorageDataRelationships: CreateStorageDataRelationships,
		/**
		 * The CreateStorageDataRelationshipsTarget model constructor.
		 * @property {module:model/CreateStorageDataRelationshipsTarget}
		 */
		CreateStorageDataRelationshipsTarget: CreateStorageDataRelationshipsTarget,
		/**
		 * The CreateVersion model constructor.
		 * @property {module:model/CreateVersion}
		 */
		CreateVersion: CreateVersion,
		/**
		 * The CreateVersionData model constructor.
		 * @property {module:model/CreateVersionData}
		 */
		CreateVersionData: CreateVersionData,
		/**
		 * The CreateVersionDataRelationships model constructor.
		 * @property {module:model/CreateVersionDataRelationships}
		 */
		CreateVersionDataRelationships: CreateVersionDataRelationships,
		/**
		 * The CreateVersionDataRelationshipsItem model constructor.
		 * @property {module:model/CreateVersionDataRelationshipsItem}
		 */
		CreateVersionDataRelationshipsItem: CreateVersionDataRelationshipsItem,
		/**
		 * The CreateVersionDataRelationshipsItemData model constructor.
		 * @property {module:model/CreateVersionDataRelationshipsItemData}
		 */
		CreateVersionDataRelationshipsItemData: CreateVersionDataRelationshipsItemData,
		/**
		 * The Diagnostics model constructor.
		 * @property {module:model/Diagnostics}
		 */
		Diagnostics: Diagnostics,
		/**
		 * The Folder model constructor.
		 * @property {module:model/Folder}
		 */
		Folder: Folder,
		/**
		 * The FolderAttributes model constructor.
		 * @property {module:model/FolderAttributes}
		 */
		FolderAttributes: FolderAttributes,
		/**
		 * The FolderRelationships model constructor.
		 * @property {module:model/FolderRelationships}
		 */
		FolderRelationships: FolderRelationships,
		/**
		 * The Forbidden model constructor.
		 * @property {module:model/Forbidden}
		 */
		Forbidden: Forbidden,
		/**
		 * The Formats model constructor.
		 * @property {module:model/Formats}
		 */
		Formats: Formats,
		/**
		 * The FormatsFormats model constructor.
		 * @property {module:model/FormatsFormats}
		 */
		FormatsFormats: FormatsFormats,
		/**
		 * The Hub model constructor.
		 * @property {module:model/Hub}
		 */
		Hub: Hub,
		/**
		 * The HubAttributes model constructor.
		 * @property {module:model/HubAttributes}
		 */
		HubAttributes: HubAttributes,
		/**
		 * The HubRelationships model constructor.
		 * @property {module:model/HubRelationships}
		 */
		HubRelationships: HubRelationships,
		/**
		 * The Hubs model constructor.
		 * @property {module:model/Hubs}
		 */
		Hubs: Hubs,
		/**
		 * The Item model constructor.
		 * @property {module:model/Item}
		 */
		Item: Item,
		/**
		 * The ItemAttributes model constructor.
		 * @property {module:model/ItemAttributes}
		 */
		ItemAttributes: ItemAttributes,
		/**
		 * The ItemCreated model constructor.
		 * @property {module:model/ItemCreated}
		 */
		ItemCreated: ItemCreated,
		/**
		 * The ItemRelationships model constructor.
		 * @property {module:model/ItemRelationships}
		 */
		ItemRelationships: ItemRelationships,
		/**
		 * The Job model constructor.
		 * @property {module:model/Job}
		 */
		Job: Job,
		/**
		 * The JobAcceptedJobs model constructor.
		 * @property {module:model/JobAcceptedJobs}
		 */
		JobAcceptedJobs: JobAcceptedJobs,
		/**
		 * The JobDwgOutputPayload model constructor.
		 * @property {module:model/JobDwgOutputPayload}
		 */
		JobDwgOutputPayload: JobDwgOutputPayload,
		/**
		 * The JobDwgOutputPayloadAdvanced model constructor.
		 * @property {module:model/JobDwgOutputPayloadAdvanced}
		 */
		JobDwgOutputPayloadAdvanced: JobDwgOutputPayloadAdvanced,
		/**
		 * The JobIfcOutputPayload model constructor.
		 * @property {module:model/JobIfcOutputPayload}
		 */
		JobIfcOutputPayload: JobIfcOutputPayload,
		/**
		 * The JobIfcOutputPayloadAdvanced model constructor.
		 * @property {module:model/JobIfcOutputPayloadAdvanced}
		 */
		JobIfcOutputPayloadAdvanced: JobIfcOutputPayloadAdvanced,
		/**
		 * The JobIgesOutputPayload model constructor.
		 * @property {module:model/JobIgesOutputPayload}
		 */
		JobIgesOutputPayload: JobIgesOutputPayload,
		/**
		 * The JobIgesOutputPayloadAdvanced model constructor.
		 * @property {module:model/JobIgesOutputPayloadAdvanced}
		 */
		JobIgesOutputPayloadAdvanced: JobIgesOutputPayloadAdvanced,
		/**
		 * The JobObjOutputPayload model constructor.
		 * @property {module:model/JobObjOutputPayload}
		 */
		JobObjOutputPayload: JobObjOutputPayload,
		/**
		 * The JobObjOutputPayloadAdvanced model constructor.
		 * @property {module:model/JobObjOutputPayloadAdvanced}
		 */
		JobObjOutputPayloadAdvanced: JobObjOutputPayloadAdvanced,
		/**
		 * The JobPayload model constructor.
		 * @property {module:model/JobPayload}
		 */
		JobPayload: JobPayload,
		/**
		 * The JobPayloadInput model constructor.
		 * @property {module:model/JobPayloadInput}
		 */
		JobPayloadInput: JobPayloadInput,
		/**
		 * The JobPayloadItem model constructor.
		 * @property {module:model/JobPayloadItem}
		 */
		JobPayloadItem: JobPayloadItem,
		/**
		 * The JobPayloadOutput model constructor.
		 * @property {module:model/JobPayloadOutput}
		 */
		JobPayloadOutput: JobPayloadOutput,
		/**
		 * The JobPayloadMisc model constructor.
		 * @property {module:model/JobPayloadMisc}
		 */
		JobPayloadMisc: JobPayloadMisc,
		/**
		 * The JobPayloadDestination model constructor.
		 * @property {module:model/JobPayloadDestination}
		 */
		JobPayloadDestination: JobPayloadDestination,
		/**
		 * The JobStepOutputPayload model constructor.
		 * @property {module:model/JobStepOutputPayload}
		 */
		JobStepOutputPayload: JobStepOutputPayload,
		/**
		 * The JobStepOutputPayloadAdvanced model constructor.
		 * @property {module:model/JobStepOutputPayloadAdvanced}
		 */
		JobStepOutputPayloadAdvanced: JobStepOutputPayloadAdvanced,
		/**
		 * The JobStlOutputPayload model constructor.
		 * @property {module:model/JobStlOutputPayload}
		 */
		JobStlOutputPayload: JobStlOutputPayload,
		/**
		 * The JobStlOutputPayloadAdvanced model constructor.
		 * @property {module:model/JobStlOutputPayloadAdvanced}
		 */
		JobStlOutputPayloadAdvanced: JobStlOutputPayloadAdvanced,
		/**
		 * The JobSvfOutputPayload model constructor.
		 * @property {module:model/JobSvfOutputPayload}
		 */
		JobSvfOutputPayload: JobSvfOutputPayload,
		/**
		 * The JobSvfOutputPayloadAdvanced model constructor.
		 * @property {module:model/JobSvfOutputPayloadAdvanced}
		 */
		JobSvfOutputPayloadAdvanced: JobSvfOutputPayloadAdvanced,
		/**
		 * The JobSvf2OutputPayload model constructor.
		 * @property {module:model/JobSvf2OutputPayload}
		 */
		JobSvf2OutputPayload: JobSvf2OutputPayload,
		/**
		 * The JobSvf2OutputPayloadAdvanced model constructor.
		 * @property {module:model/JobSvf2OutputPayloadAdvanced}
		 */
		JobSvf2OutputPayloadAdvanced: JobSvf2OutputPayloadAdvanced,
		/**
		 * The JobThumbnailOutputPayload model constructor.
		 * @property {module:model/JobThumbnailOutputPayload}
		 */
		JobThumbnailOutputPayload: JobThumbnailOutputPayload,
		/**
		 * The JobThumbnailOutputPayloadAdvanced model constructor.
		 * @property {module:model/JobThumbnailOutputPayloadAdvanced}
		 */
		JobThumbnailOutputPayloadAdvanced: JobThumbnailOutputPayloadAdvanced,
		/**
		 * The JsonApiAttributes model constructor.
		 * @property {module:model/JsonApiAttributes}
		 */
		JsonApiAttributes: JsonApiAttributes,
		/**
		 * The JsonApiCollection model constructor.
		 * @property {module:model/JsonApiCollection}
		 */
		JsonApiCollection: JsonApiCollection,
		/**
		 * The JsonApiDocument model constructor.
		 * @property {module:model/JsonApiDocument}
		 */
		JsonApiDocument: JsonApiDocument,
		/**
		 * The JsonApiDocumentBase model constructor.
		 * @property {module:model/JsonApiDocumentBase}
		 */
		JsonApiDocumentBase: JsonApiDocumentBase,
		/**
		 * The JsonApiError model constructor.
		 * @property {module:model/JsonApiError}
		 */
		JsonApiError: JsonApiError,
		/**
		 * The JsonApiErrorErrors model constructor.
		 * @property {module:model/JsonApiErrorErrors}
		 */
		JsonApiErrorErrors: JsonApiErrorErrors,
		/**
		 * The JsonApiErrorLinks model constructor.
		 * @property {module:model/JsonApiErrorLinks}
		 */
		JsonApiErrorLinks: JsonApiErrorLinks,
		/**
		 * The JsonApiLink model constructor.
		 * @property {module:model/JsonApiLink}
		 */
		JsonApiLink: JsonApiLink,
		/**
		 * The JsonApiLinks model constructor.
		 * @property {module:model/JsonApiLinks}
		 */
		JsonApiLinks: JsonApiLinks,
		/**
		 * The JsonApiLinksPaging model constructor.
		 * @property {module:model/JsonApiLinksPaging}
		 */
		JsonApiLinksPaging: JsonApiLinksPaging,
		/**
		 * The JsonApiLinksRelated model constructor.
		 * @property {module:model/JsonApiLinksRelated}
		 */
		JsonApiLinksRelated: JsonApiLinksRelated,
		/**
		 * The JsonApiLinksSelf model constructor.
		 * @property {module:model/JsonApiLinksSelf}
		 */
		JsonApiLinksSelf: JsonApiLinksSelf,
		/**
		 * The JsonApiMeta model constructor.
		 * @property {module:model/JsonApiMeta}
		 */
		JsonApiMeta: JsonApiMeta,
		/**
		 * The JsonApiMetaLink model constructor.
		 * @property {module:model/JsonApiMetaLink}
		 */
		JsonApiMetaLink: JsonApiMetaLink,
		/**
		 * The JsonApiRelationships model constructor.
		 * @property {module:model/JsonApiRelationships}
		 */
		JsonApiRelationships: JsonApiRelationships,
		/**
		 * The JsonApiRelationshipsLinksExternalResource model constructor.
		 * @property {module:model/JsonApiRelationshipsLinksExternalResource}
		 */
		JsonApiRelationshipsLinksExternalResource: JsonApiRelationshipsLinksExternalResource,
		/**
		 * The JsonApiRelationshipsLinksInternal model constructor.
		 * @property {module:model/JsonApiRelationshipsLinksInternal}
		 */
		JsonApiRelationshipsLinksInternal: JsonApiRelationshipsLinksInternal,
		/**
		 * The JsonApiRelationshipsLinksInternalResource model constructor.
		 * @property {module:model/JsonApiRelationshipsLinksInternalResource}
		 */
		JsonApiRelationshipsLinksInternalResource: JsonApiRelationshipsLinksInternalResource,
		/**
		 * The JsonApiRelationshipsLinksRefs model constructor.
		 * @property {module:model/JsonApiRelationshipsLinksRefs}
		 */
		JsonApiRelationshipsLinksRefs: JsonApiRelationshipsLinksRefs,
		/**
		 * The JsonApiRelationshipsLinksRefsLinks model constructor.
		 * @property {module:model/JsonApiRelationshipsLinksRefsLinks}
		 */
		JsonApiRelationshipsLinksRefsLinks: JsonApiRelationshipsLinksRefsLinks,
		/**
		 * The JsonApiResource model constructor.
		 * @property {module:model/JsonApiResource}
		 */
		JsonApiResource: JsonApiResource,
		/**
		 * The JsonApiTypeId model constructor.
		 * @property {module:model/JsonApiTypeId}
		 */
		JsonApiTypeId: JsonApiTypeId,
		/**
		 * The JsonApiVersion model constructor.
		 * @property {module:model/JsonApiVersion}
		 */
		JsonApiVersion: JsonApiVersion,
		/**
		 * The JsonApiVersionJsonapi model constructor.
		 * @property {module:model/JsonApiVersionJsonapi}
		 */
		JsonApiVersionJsonapi: JsonApiVersionJsonapi,
		/**
		 * The Manifest model constructor.
		 * @property {module:model/Manifest}
		 */
		Manifest: Manifest,
		/**
		 * The ManifestChildren model constructor.
		 * @property {module:model/ManifestChildren}
		 */
		ManifestChildren: ManifestChildren,
		/**
		 * The ManifestDerivative model constructor.
		 * @property {module:model/ManifestDerivative}
		 */
		ManifestDerivative: ManifestDerivative,
		/**
		 * The Message model constructor.
		 * @property {module:model/Message}
		 */
		Message: Message,
		/**
		 * The Messages model constructor.
		 * @property {module:model/Messages}
		 */
		Messages: Messages,
		/**
		 * The Metadata model constructor.
		 * @property {module:model/Metadata}
		 */
		Metadata: Metadata,
		/**
		 * The MetadataCollection model constructor.
		 * @property {module:model/MetadataCollection}
		 */
		MetadataCollection: MetadataCollection,
		/**
		 * The MetadataData model constructor.
		 * @property {module:model/MetadataData}
		 */
		MetadataData: MetadataData,
		/**
		 * The MetadataMetadata model constructor.
		 * @property {module:model/MetadataMetadata}
		 */
		MetadataMetadata: MetadataMetadata,
		/**
		 * The MetadataObject model constructor.
		 * @property {module:model/MetadataObject}
		 */
		MetadataObject: MetadataObject,
		/**
		 * The NotFound model constructor.
		 * @property {module:model/NotFound}
		 */
		NotFound: NotFound,
		/**
		 * The ObjectDetails model constructor.
		 * @property {module:model/ObjectDetails}
		 */
		ObjectDetails: ObjectDetails,
		/**
		 * The ObjectFullDetails model constructor.
		 * @property {module:model/ObjectFullDetails}
		 */
		ObjectFullDetails: ObjectFullDetails,
		/**
		 * The ObjectFullDetailsDeltas model constructor.
		 * @property {module:model/ObjectFullDetailsDeltas}
		 */
		ObjectFullDetailsDeltas: ObjectFullDetailsDeltas,
		/**
		 * The ObjectS3Download model constructor.
		 * @property {module:model/ObjectS3Download}
		 */
		ObjectS3Download: ObjectS3Download,
		/**
		 * The ObjectS3Upload model constructor.
		 * @property {module:model/ObjectS3Upload}
		 */
		ObjectS3Upload: ObjectS3Upload,
		/**
		 * The Permission model constructor.
		 * @property {module:model/Permission}
		 */
		Permission: Permission,
		/**
		 * The PostBucketsPayload model constructor.
		 * @property {module:model/PostBucketsPayload}
		 */
		PostBucketsPayload: PostBucketsPayload,
		/**
		 * The PostBucketsPayloadAllow model constructor.
		 * @property {module:model/PostBucketsPayloadAllow}
		 */
		PostBucketsPayloadAllow: PostBucketsPayloadAllow,
		/**
		 * The PostBucketsSigned model constructor.
		 * @property {module:model/PostBucketsSigned}
		 */
		PostBucketsSigned: PostBucketsSigned,
		/**
		 * The PostObjectSigned model constructor.
		 * @property {module:model/PostObjectSigned}
		 */
		PostObjectSigned: PostObjectSigned,
		/**
		 * The Project model constructor.
		 * @property {module:model/Project}
		 */
		Project: Project,
		/**
		 * The ProjectAttributes model constructor.
		 * @property {module:model/ProjectAttributes}
		 */
		ProjectAttributes: ProjectAttributes,
		/**
		 * The ProjectRelationships model constructor.
		 * @property {module:model/ProjectRelationships}
		 */
		ProjectRelationships: ProjectRelationships,
		/**
		 * The Projects model constructor.
		 * @property {module:model/Projects}
		 */
		Projects: Projects,
		/**
		 * The Reason model constructor.
		 * @property {module:model/Reason}
		 */
		Reason: Reason,
		/**
		 * The Refs model constructor.
		 * @property {module:model/Refs}
		 */
		Refs: Refs,
		/**
		 * The RelRef model constructor.
		 * @property {module:model/RelRef}
		 */
		RelRef: RelRef,
		/**
		 * The RelRefMeta model constructor.
		 * @property {module:model/RelRefMeta}
		 */
		RelRefMeta: RelRefMeta,
		/**
		 * The ResourceId model constructor.
		 * @property {module:model/ResourceId}
		 */
		ResourceId: ResourceId,
		/**
		 * The Result model constructor.
		 * @property {module:model/Result}
		 */
		Result: Result,
		/**
		 * The Storage model constructor.
		 * @property {module:model/Storage}
		 */
		Storage: Storage,
		/**
		 * The StorageCreated model constructor.
		 * @property {module:model/StorageCreated}
		 */
		StorageCreated: StorageCreated,
		/**
		 * The StorageRelationships model constructor.
		 * @property {module:model/StorageRelationships}
		 */
		StorageRelationships: StorageRelationships,
		/**
		 * The StorageRelationshipsTarget model constructor.
		 * @property {module:model/StorageRelationshipsTarget}
		 */
		StorageRelationshipsTarget: StorageRelationshipsTarget,
		/**
		 * The StorageRelationshipsTargetData model constructor.
		 * @property {module:model/StorageRelationshipsTargetData}
		 */
		StorageRelationshipsTargetData: StorageRelationshipsTargetData,
		/**
		 * The TopFolders model constructor.
		 * @property {module:model/TopFolders}
		 */
		TopFolders: TopFolders,
		/**
		 * The UserProfile model constructor.
		 * @property {module:model/UserProfile}
		 */
		UserProfile: UserProfile,
		/**
		 * The UserProfileProfileImages model constructor.
		 * @property {module:model/UserProfileProfileImages}
		 */
		UserProfileProfileImages: UserProfileProfileImages,
		/**
		 * The Version model constructor.
		 * @property {module:model/Version}
		 */
		Version: Version,
		/**
		 * The VersionAttributes model constructor.
		 * @property {module:model/VersionAttributes}
		 */
		VersionAttributes: VersionAttributes,
		/**
		 * The VersionCreated model constructor.
		 * @property {module:model/VersionCreated}
		 */
		VersionCreated: VersionCreated,
		/**
		 * The VersionRelationships model constructor.
		 * @property {module:model/VersionRelationships}
		 */
		VersionRelationships: VersionRelationships,
		/**
		 * The Versions model constructor.
		 * @property {module:model/Versions}
		 */
		Versions: Versions,
		/**
		 * The BucketsApi service constructor.
		 * @property {module:api/BucketsApi}
		 */
		BucketsApi: BucketsApi,
		/**
		 * The CommandsApi service constructor.
		 * @property {module:api/CommandsApi}
		 */
		CommandsApi: CommandsApi,
		/**
		 * The DerivativesApi service constructor.
		 * @property {module:api/DerivativesApi}
		 */
		DerivativesApi: DerivativesApi,
		/**
		 * The FoldersApi service constructor.
		 * @property {module:api/FoldersApi}
		 */
		FoldersApi: FoldersApi,
		/**
		 * The HubsApi service constructor.
		 * @property {module:api/HubsApi}
		 */
		HubsApi: HubsApi,
		/**
		 * The ItemsApi service constructor.
		 * @property {module:api/ItemsApi}
		 */
		ItemsApi: ItemsApi,
		/**
		 * The ObjectsApi service constructor.
		 * @property {module:api/ObjectsApi}
		 */
		ObjectsApi: ObjectsApi,
		/**
		 * The ProjectsApi service constructor.
		 * @property {module:api/ProjectsApi}
		 */
		ProjectsApi: ProjectsApi,
		/**
		 * The UserProfileApi service constructor.
		 * @property {module:api/UserProfileApi}
		 */
		UserProfileApi: UserProfileApi,
		/**
		 * The VersionsApi service constructor.
		 * @property {module:api/VersionsApi}
		 */
		VersionsApi: VersionsApi,
		/**
		 * The WebhooksApi service constructor.
		 * @property {module:api/WebhooksApi}
		 */
		WebhooksApi: WebhooksApi,
		/**
		 * The TokensApi service constructor.
		 * @property {module:api/TokensApi}
		 */
		TokensApi: TokensApi,
		/**
		 * The AuthClient service constructor for 2-legged flow.
		 * @property {module:auth/OAuth2TwoLegged}
		 */
		AuthClientTwoLegged: authClientTwoLegged,
		/**
		 * The AuthClient service constructor for 3-legged flow.
		 * @property {module:auth/OAuth2ThreeLegged}
		 */
		AuthClientThreeLegged: authClientThreeLegged,
		/**
		 * Optionally enable debugging
		 * @param isDebug
		 */
		setDebug: function (isDebug) {
			ApiClient.instance.isDebugMode = isDebug;
		}

	};

	return exports;
}());